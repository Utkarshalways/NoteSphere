import React from 'react'
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import { Route,Routes } from 'react-router-dom';
import Header from "../Components/Header";

const Home = () => {
    console.log("This is Home")
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/signin"} element={<SignIn />}></Route>
        <Route path={"/signup"} element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default Home