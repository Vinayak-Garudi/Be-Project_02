import './style.css'

// firebase 
import {initializeApp} from 'firebase/app';
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';


const firebaseConfig = {
    // apiKey: "AIzaSyCoO9YcKZJdEpkMsfa51XBqbJz6eMAVW8A",
    // authDomain: "be-project-94a2e.firebaseapp.com",
    // databaseURL: "https://be-project-94a2e-default-rtdb.firebaseio.com",
    // projectId: "be-project-94a2e",
    // storageBucket: "be-project-94a2e.appspot.com",
    // messagingSenderId: "504096098693",
    // appId: "1:504096098693:web:32f6444cbdaf25284e1cec",
    // measurementId: "G-CKMJ10QJD5"
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth();

// get element by id for signup
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
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        // document.getElementById('welcomePageLink').click();
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
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
