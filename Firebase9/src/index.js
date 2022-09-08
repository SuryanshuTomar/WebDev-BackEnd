// -> import initializeApp function from firebase/app to initailize our firebase app instanceof.
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	getDocs,
	onSnapshot,
	addDoc,
	updateDoc,
	doc,
	deleteDoc,
	query,
	where,
	orderBy,
	serverTimestamp,
} from "firebase/firestore";

// -> Firebase config settings of our app from the firebase console.
const firebaseConfig = {
	apiKey: "AIzaSyDerrz9KTo65qL5uDGDzVcDrkawNggMerw",
	authDomain: "learn-firebase-9-82f96.firebaseapp.com",
	projectId: "learn-firebase-9-82f96",
	storageBucket: "learn-firebase-9-82f96.appspot.com",
	messagingSenderId: "186833937148",
	appId: "1:186833937148:web:45e65fa9052264b41fed79",
};

// -> Initialize Firebase App
initializeApp(firebaseConfig);

// -> Init Services
const db = getFirestore();

// -> Collection Ref
const colRef = collection(db, "books"); // collection(FirebaseInstance(database), collectionName)

// -> Get collection Data
// getDocs(collectionReference) => It will return a promise
// getDocs(colRef)
// 	.then((snapshot) => {
// 		let books = [];
// 		snapshot.docs.forEach((doc) => {
// 			books.push({ ...doc.data(), id: doc.id });
// 		});
// 		console.log(books);
// 	})
// 	.catch((error) => console.error(error));

// -> Real Time collection Data
// This will get us the latest snapshot of the collection every time there is a change in the collection.
// onSnapshot(collectionReference, callBackfunction) => The callbackFunction will run every time there is change in the collection and it will return the latest snapshot of the collection
// onSnapshot(colRef, (snapshot) => {
// 	let books = [];
// 	snapshot.docs.forEach((doc) => {
// 		books.push({ ...doc.data(), id: doc.id });
// 	});
// 	console.log(books);
// });

// -> Firestore Queries And OrderBy-
// This will get us only the documents which satifies the where condition in the query.
// query(CollectionReference,
// 		where("FieldName", "Comparator", "SearchValue"),
// 		orderBy("FieldName", "asc/desc"));
// For orderBy, first we need to create the composite Index in the indexes tab in the firebase firestore of our app in the console.
// const bookQueryRef = query(
// 	colRef,
// 	where("author", "==", "Jane"),
// 	orderBy("title", "desc") // by default it will be ascending
// );
const bookQueryRef = query(colRef, orderBy("createdAt"));
onSnapshot(bookQueryRef, (snapshot) => {
	let books = [];
	snapshot.docs.forEach((doc) => {
		books.push({ ...doc.data(), id: doc.id });
	});
	console.log(books);
});

// -> Adding documents
// addDoc(collectionReference, DataObject);
const addBookForm = document.querySelector(".add");
addBookForm.addEventListener("submit", (event) => {
	event.preventDefault();

	addDoc(colRef, {
		title: addBookForm.title.value,
		author: addBookForm.author.value,
		createdAt: serverTimestamp(),
	})
		.then(() => addBookForm.reset())
		.catch((err) => console.log(err));
});

// -> Deleting documents
// - First, get the reference of the document you want to delete using doc()
// - Second, call the deleteDoc() method
// doc(FirebaseInstance(database), collectionName)
// deleteDoc(docReference);
const deleteBookForm = document.querySelector(".delete");
deleteBookForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const docRef = doc(db, "books", deleteBookForm.id.value);
	deleteDoc(docRef)
		.then(() => deleteBookForm.reset())
		.catch(() => console.log(doc));
});
