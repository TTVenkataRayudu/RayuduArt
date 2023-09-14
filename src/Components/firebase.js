import { initializeApp } from 'firebase/app';
import { storage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBxJkm5Mo4ba1rqmfNatD36nnwtB17KM4c",
    authDomain: "rayuduart.firebaseapp.com",
    projectId: "rayuduart",
    storageBucket: "rayuduart.appspot.com",
    messagingSenderId: "209584652865",
    appId: "1:209584652865:web:cddfeff526b8a7a05ffcc0",
    measurementId: "G-B2GN1FXJ1T"
}

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);