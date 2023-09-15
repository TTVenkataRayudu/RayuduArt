import { useState } from 'react';
import storage from './firebase';
function App() {
    const [image, setImage] = useState<File | null>(null); // Use File | null for image state
    const upload = () => {
        if (image == null)
            return;
        storage.ref(`/images/${image.name}`).put(image)
       
    }

    return (
        <div className="App">
            <center>
                <input type="file" onChange={(e:any) => { setImage(e.target.files[0]) }} />
                <button onClick={upload}>Upload</button>
            </center>
        </div>
    );
}

export default App;