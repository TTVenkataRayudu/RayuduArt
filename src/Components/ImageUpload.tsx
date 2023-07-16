import React, { ChangeEvent, FormEvent, useState } from 'react';
import './ImageUpload.css'; // Import the CSS file

const ImageUpload: React.FC = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const [uploadedImage, setUploadedImage] = useState<string>('');

    const handleIdChange = (event: ChangeEvent<HTMLInputElement>) => {
        setId(event.target.value);
    };

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleTypeChange = (event: ChangeEvent<HTMLInputElement>) => {
        setType(event.target.value);
    };

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setImage(event.target.files[0]);
            setUploadedImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('id', id);
        formData.append('name', name);
        formData.append('description', description);
        formData.append('type', type);
        formData.append('image', image as File);

        try {
            const response = await fetch('/uploads', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (response.ok) {
                setMessage(result.message);
                setId('');
                setName('');
                setDescription('');
                setType('');
                setImage(null);
                setUploadedImage('');
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error(error);
            setMessage('Error occurred during upload.');
        }
    };

    return (
        <div className="form-container">
            <h1>Image Upload</h1>
            <form onSubmit={handleSubmit} className="upload-form">
                <div className="form-field">
                    <label htmlFor="id">ID:</label>
                    <input type="text" id="id" name="id" value={id} onChange={handleIdChange} required />
                </div>

                <div className="form-field">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required />
                </div>

                <div className="form-field">
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={handleDescriptionChange}
                        required
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="type">Type:</label>
                    <input type="text" id="type" name="type" value={type} onChange={handleTypeChange} required />
                </div>

                <div className="form-field">
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
                </div>

                {uploadedImage && <img src={uploadedImage} alt="Uploaded" className="uploaded-image" />}

                <button type="submit" className="submit-button">Upload</button>
            </form>

            {message && <div>{message}</div>}
        </div>
    );
};

export default ImageUpload;
