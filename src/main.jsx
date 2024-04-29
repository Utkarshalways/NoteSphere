import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  Firebasecontextprovider  from "./context/Firebasecontextprovider";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Firebasecontextprovider>
        <App />
      </Firebasecontextprovider>
    </BrowserRouter>
  </React.StrictMode>
);
