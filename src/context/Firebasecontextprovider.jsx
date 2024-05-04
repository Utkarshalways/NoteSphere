
import { initializeApp } from "firebase/app";


//imports from the /auth
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
  
} from "firebase/auth";


//imports from the firestore
import {
  addDoc,
    collection,
    getDocs,
    getFirestore,
} from "firebase/firestore";

//imports from the firebase/storage
import { getDownloadURL, getStorage,ref,uploadBytes   } from "firebase/storage";
//Other imports related to the react 
import React, { createContext, useContext, useState,useEffect } from 'react'



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



const Firebasecontext = createContext(null);
export const useFirebase = () => useContext(Firebasecontext);
const firebaseapp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(firebaseapp);
const storage = getStorage(firebaseapp);

  
  
  const Firebasecontextprovider = ({children}) => {
    const [User,setUser] = useState(null);



    useEffect(() => {
      
      onAuthStateChanged(auth,(user)=>{
        // console.log("User :-- ",user);
        if(user){
          setUser(user);
        }
        else{
          setUser(null)
        }
      })
    
      
    }, [auth])
    

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
    

    const signInwithgoogle = () =>    signInWithPopup(auth,googleProvider)

    const logout = () => {
      

      signOut(auth).then(()=>{
        console.log("Signout successfully");
      }).catch((err)=>{
        console.log(err);
      })
      
    }

    const isLoggedin = User ? true : false;



    const handlenoteformsubmit = async (title,email,number,pic,description) => {

      const imageRef = ref(storage,`uploads/images/${Date.now()}-${pic.name}`);
       const uploadResult =   await uploadBytes(imageRef,pic); 

       console.log(User);
       return  await addDoc(collection(firestore,"notes"),{
          title,
          email,
          number,
          imageUrl: uploadResult.ref.fullPath,
          description,
          UserEmail: User.email,
          Uid:User.uid
       })
    }


    const getNotes = () => {

      return getDocs(collection( firestore,"notes"));
    };

    const getUrl = (path) => {

      return getDownloadURL(ref(storage,path));
    }

    
    return (
      <Firebasecontext.Provider
        value={{
          isLoggedin,
          signInwithgoogle,
          firebaseapp,
          SignINUser,
          CreateUser,
          logout,
          handlenoteformsubmit,
          getNotes,
          User,
          getUrl
        }}
      >
        {children}
      </Firebasecontext.Provider>
    );
  }

export default Firebasecontextprovider