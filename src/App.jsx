
import React from 'react'
import Home from './pages/Home'
import SignIn from './Components/SignIn';
import SignUp from "./Components/SignUp";
import { Route,Routes } from 'react-router-dom';
import Header from "./Components/Header";
import NoteForm from './Components/NoteForm';


const App = () => {
  
  // console.log(String(import.meta.env.VITE_FIREBASE_API_KEY));
  return (

    <>

    <Header />
      <Routes>

        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/signin"} element={<SignIn />}></Route>
        <Route path={"/signup"} element={<SignUp />}></Route>
        <Route path={"/noteform"} element={<NoteForm />}></Route>
      </Routes>
      
    </>
  );
}

export default App