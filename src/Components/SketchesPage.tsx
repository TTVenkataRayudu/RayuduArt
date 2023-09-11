import React, { useState } from 'react';
import { artimages } from '../images/images';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

interface Image {
    key: number;
    Name: string;
    Description: string;
    ImageURL: string;
    category: string;
}

export const SketchesPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);

    const openModal = (image: Image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setShowModal(false);
    };

    const modalStyle = {
        // Center the modal vertically and horizontally
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    // Background color with transparency
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontFamily: 'Roboto, sans-serif' // Use "Roboto" as the font-family

    };

    return (
        <div className="productimage">
            <div className="image-container">
                {artimages
                    .filter((x) => x.category === 'pencilsketch')
                    .map((p) => (
                        <div className="image" key={p.key} onClick={() => openModal(p)}>
                            <img src={p.ImageURL} alt={p.Name} />
                            <div className="description">
                                <div>Name: {p.Name}</div>
                                <p>Description: {p.Description}</p>
                            </div>
                        </div>
                    ))}
            </div>

            {selectedImage && (
                // Inside your component
                <Modal show={showModal} onHide={closeModal} style={modalStyle}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ fontFamily: 'Roboto, sans-serif' }}>
                            {selectedImage.Name}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ fontFamily: 'Roboto, sans-serif' }}>
                        <img src={selectedImage.ImageURL} alt={selectedImage.Name} style={{ width: '100%' }} />
                        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
                            <div>Name: {selectedImage.Name}</div>
                            <p>Description: {selectedImage.Description}</p>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>




            )}
        </div>
    );
};
