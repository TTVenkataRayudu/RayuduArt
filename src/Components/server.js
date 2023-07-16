import express, { Request, Response } from 'express';
import multer, { Multer } from 'multer';
import mongoose, { Connection, Document, Model } from 'mongoose';
import { MongoClient, Db, ObjectId } from 'mongodb';

const app = express();
const upload: Multer = multer({ dest: 'uploads/' });

// Connect to MongoDB
mongoose.connect('mongodb://122.185.109.90/32/rayuduart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db: Connection = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Define a schema for the image data
interface IImage extends Document {
    name: string;
    description: string;
    type: string;
    fileId?: ObjectId;
}

const ImageSchema = new mongoose.Schema < IImage > ({
    name: String,
    description: String,
    type: String,
    fileId: mongoose.ObjectId,
});

// Create a model based on the schema
const Image: Model<IImage> = mongoose.model < IImage > ('Image', ImageSchema);

// Endpoint to handle image upload
app.post('/upload', upload.single('image'), async (req: Request, res: Response) => {
    try {
        const { name, description, type } = req.body;

        // Create a new image document
        const newImage: IImage = new Image({
            name,
            description,
            type,
        });

        // Save the image document to MongoDB
        await newImage.save();

        // Connect to MongoDB directly to access GridFS
        const client: MongoClient = await MongoClient.connect('mongodb://122.185.109.90/32/rayuduart', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db: Db = client.db();
        const bucket = new mongoose.mongo.GridFSBucket(db);

        // Open a readable stream from the uploaded file
        const readableStream = require('fs').createReadStream(req.file.path);

        // Create a file ID for GridFS
        const fileId: ObjectId = new mongoose.Types.ObjectId();

        // Create a writable stream to store the file in GridFS
        const writableStream = bucket.openUploadStreamWithId(fileId, req.file.originalname);

        // Pipe the data from the readable stream to the writable stream
        readableStream.pipe(writableStream);

        // Wait for the file to finish uploading
        await new Promise < void> ((resolve, reject) => {
            writableStream.on('finish', resolve);
            writableStream.on('error', reject);
        });

        // Update the image document with the GridFS file ID
        newImage.fileId = fileId;
        await newImage.save();

        // Delete the temporary file
        require('fs').unlinkSync(req.file.path);

        res.json({ message: 'Image uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred during upload' });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
