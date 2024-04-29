
import { initializeApp } from "firebase/app";


//imports for the signin and sign up
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

//firebase details 
const firebaseConfig = {
  apiKey: String(import.meta.env.VITE_FIREBASE_API_KEY),
  authDomain: String(import.meta.env.VITE_FIREBASE_AUTH_DOMAIN),
  projectId: String(import.meta.env.VITE_FIREBASE_PROJECT_ID),
  storageBucket: String(import.meta.env.VITE_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: String(import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID),
  appId: String(import.meta.env.VITE_FIREBASE_APP_ID),
  measurementId: String(import.meta.env.VITE_FIREBASE_MEASUREMENT_ID),
  databaseURL: String(import.meta.env.VITE_FIREBASE_DATABASE_URL),
};


import React, { createContext, useContext, useState } from 'react'

const Firebasecontext = createContext(null);
export const useFirebase = () => useContext(Firebasecontext);
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);

//Functions:--
// const createUser = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password);
  // };
  
  
  const Firebasecontextprovider = ({children}) => {
    // const [count, setcount] = useState(0);

    const SignINUser = (email, password) => {
      signInWithEmailAndPassword(auth, email, password).then(()=>{
        console.log("Sucess")
      }).catch((err)=>{
        console.log(err);
      })
      console.log("Entered in signIN with Email and Password")
    };


    const CreateUser = (email , password) => {

      createUserWithEmailAndPassword(auth,email,password).then(()=>{
        console.log("Sucess")
      }).catch((err)=>{
        console.log(err)
      })
    }

    return (
      <Firebasecontext.Provider value={{  firebaseapp,SignINUser,CreateUser }}>
        {children}
      </Firebasecontext.Provider>
    );
  }

export default Firebasecontextprovider