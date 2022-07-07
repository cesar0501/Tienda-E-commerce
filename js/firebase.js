
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js"

const firebaseConfig = {
  apiKey: "AIzaSyDrsB7n246eviW-44d2HCIYrb8k6ubnWa0",
  authDomain: "gama-sillasdesign.firebaseapp.com",
  projectId: "gama-sillasdesign",
  storageBucket: "gama-sillasdesign.appspot.com",
  messagingSenderId: "251894963607",
  appId: "1:251894963607:web:35c5ca1b7e17c9782bf8d2"
}


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export const getProducts = async () => {

    const querySnapshot = await getDocs(collection(db, "products"));

    const products = []

    querySnapshot .forEach((doc) => {
      products.push(doc);
    });

    return products;
 }

 export const getProduct = async (id) => {

    const docRef = doc(db, "products", id);

const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap;
} else {
  console.log("No such document!");
}

    
}


 


 



