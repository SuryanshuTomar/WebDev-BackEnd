// import initializeApp function from firebase/app to initailize our firebase app instanceof.
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Firebase config settings of our app from the firebase console.
const firebaseConfig = {
	apiKey: "AIzaSyDerrz9KTo65qL5uDGDzVcDrkawNggMerw",
	authDomain: "learn-firebase-9-82f96.firebaseapp.com",
	projectId: "learn-firebase-9-82f96",
	storageBucket: "learn-firebase-9-82f96.appspot.com",
	messagingSenderId: "186833937148",
	appId: "1:186833937148:web:45e65fa9052264b41fed79",
};

// Initialize Firebase App
initializeApp(firebaseConfig);

// Init Services
const db = getFirestore();

// Collection Ref
const colRef = collection(db, "books");

// Get collection Data
getDocs(colRef)
	.then((snapshot) => {
		let books = [];
		snapshot.docs.forEach((doc) => {
			books.push({ ...doc.data(), id: doc.id });
		});
		console.log(books);
	})
	.catch((error) => console.error(error));
