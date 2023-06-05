// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { doc, getDocs, collection, getFirestore, addDoc } from "firebase/firestore"

//  Adding functions from the Firebase/storage modules
import { uploadBytes, getStorage, ref, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCyKuAJ9MG-_xhUH0dNCCsRWClWf4pO1PQ",
    authDomain: "testimages-1e613.firebaseapp.com",
    projectId: "testimages-1e613",
    storageBucket: "testimages-1e613.appspot.com",
    messagingSenderId: "10262012897",
    appId: "1:10262012897:web:2a2504878c3a85769228a0"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);


const storage = getStorage(app);
const db = getFirestore();

// getting a reference to the gallery tag to display (would be done in the class display method)
let colRef = collection(db, "gallery");

// get the documents from the gallery collection in firestore
getDocs(colRef).then(
    (snapshot) => {
        snapshot.forEach(
            (doc) => {
                // grab the data (fields) for each object
                let data = doc.data();

                // make an image element
                let image = document.createElement("IMG");
                // set the src property of the image element to the url value found in the server data
                image.src = data.url;
                // add the image element to the gallery div in the html
                let parent = document.getElementById("gallery");
                parent.appendChild(image)
            }
        );
    }
)

// triggered on the file selection process
window.imageSelect = function (input) {
    // create a new storage reference fo the image, and give it the name of
    // the first file selected in the file input
    const imageRef = ref(storage, input.files[0].name);
    // upload the first selected file to the image reference
    uploadBytes(imageRef, input.files[0]).then((snapshot) => {
        console.log('Uploaded a blob or file!');

        // get the download link to the specific image ref
        getDownloadURL(imageRef).then((snap) => {
            // add a document to the gallery collection with the link to the stored image
            addDoc(colRef, { url: snap })
            // make an image element
            let image = document.createElement("IMG");
            // set the src property of the image element to the url value found in the server data
            image.src = snap;
            // add the image element to the gallery div in the html
            let parent = document.getElementById("gallery");
            parent.appendChild(image)

        });
    });
    console.log(e.files)
}



