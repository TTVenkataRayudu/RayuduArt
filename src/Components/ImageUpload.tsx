import React, { useState } from "react";
import  { uploadImage } from "./UploadImage"

export const ImageUpload = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (e: any) => {
        setFile(e)
    };
    const handleSubmit = (event:any) => {
        event.preventDefault();
        uploadImage("uploaded", file);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={(event) => {
                    const files = event.target.value;
                    handleFileChange(files)
                }}/>
                <button type="submit">Upload Image</button>
        </form>
        
    );
}