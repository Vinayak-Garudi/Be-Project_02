
// firebase 
import { initializeApp } from 'firebase/app';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import {getFirestore, collection, doc, setDoc, updateDoc , deleteField, getDoc, Timestamp } from "firebase/firestore"; 


const firebaseConfig = {
    apiKey: "AIzaSyCoO9YcKZJdEpkMsfa51XBqbJz6eMAVW8A",
    authDomain: "be-project-94a2e.firebaseapp.com",
    databaseURL: "https://be-project-94a2e-default-rtdb.firebaseio.com",
    projectId: "be-project-94a2e",
    storageBucket: "be-project-94a2e.appspot.com",
    messagingSenderId: "504096098693",
    appId: "1:504096098693:web:32f6444cbdaf25284e1cec",
    measurementId: "G-CKMJ10QJD5"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(app);

// get element by id for signup
let signupName = document.getElementById('signupName');
let signupAge = document.getElementById('signupAge');
// gender
// let signupGender = document.getElementById('signupGender');
let signupCountry = document.getElementById('signupCountry');
let signupState = document.getElementById('signState');
let signupCity = document.getElementById('signupCity');
let signupPhoneNumber = document.getElementById('signpPhoneNumber');
let signupEmail = document.getElementById('signupEmail');
let signupPassword = document.getElementById('signupPassword');
let signUpButton = document.getElementById('signupButton');

// get element by id for login
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
let loginButton = document.getElementById('loginButton');

// for signup
if (signUpButton != null){
    signUpButton.onclick = () => {
        const email = signupEmail.value
        const password = signupPassword.value
        console.log(email,password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        console.log("user regestration done!!");

        const userProfile = {
            userName: signupName.value,
            age: signupAge.value,
            country: signupCountry.value,
            city: signupCity.value,
            phoneNumber: signupPhoneNumber.value
        }

        console.log(userProfile);

        const UserData = doc(collection(db, "userProfile"), user.uid);
        setDoc(UserData, userProfile).then(()=>{
            console.log("Done",userProfile);
            window.location.replace("/welcome.html");
        });
        
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
    }
}

// for login
if (loginButton != null){
    loginButton.onclick = () => {
        const email = loginEmail.value
        const password = loginPassword.value
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        window.location.replace("/home.html");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage =error.message;
    });
    }
}













// const signUpButton = document.getElementById('signUpButton');

// signUpButton.onclick = () => {
//     const email = document.getElementById('emailInput').value;
//     const password = document.getElementById('passwordInput').value;
//     console.log(email,password);
//     createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
//         console.log('started registering...');
//         const user = userCredential.user;
//         console.log('Done registering!');
        
//     }).catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//     });
// }
