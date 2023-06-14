const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/imageUpload', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define the image model
const ImageSchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    type: String,
    image: {
        data: Buffer,
        contentType: String
    }
});

const Image = mongoose.model('Image', ImageSchema);

// Handle image upload request
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { id, name, description, type } = req.body;
        const image = {
            data: req.file.buffer,
            contentType: req.file.mimetype
        };

        // Save the data to MongoDB
        await Image.create({ id, name, description, type, image });
        res.status(200).json({ message: 'Image uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during upload' });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
