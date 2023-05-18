// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEIfqpjORtL2V-BYvLm_oZf9GhNsk4OkU",
  authDomain: "toy-sparkle-client.firebaseapp.com",
  projectId: "toy-sparkle-client",
  storageBucket: "toy-sparkle-client.appspot.com",
  messagingSenderId: "737482754074",
  appId: "1:737482754074:web:7ac80a285735da6f4069a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app