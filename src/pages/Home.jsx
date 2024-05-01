import React from 'react'
import SignIn from "../Components/SignIn";
import SignUp from "../Components/SignUp";
import { Route,Routes } from 'react-router-dom';
import Header from "../Components/Header";
import Card from '../Components/Card';

const Home = () => {
    // console.log("This is Home")
  return (
    <>
     
    <div className=' flex items-center justify-center '>

      here all the user notes will be appear

    </div>

    <div className="cardcomponent">
      <Card/>
    </div>
      
    </>
  );
}

export default Home