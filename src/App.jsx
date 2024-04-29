
import React from 'react'
import Home from './pages/Home'



const App = () => {
  
  console.log(String(import.meta.env.VITE_FIREBASE_API_KEY));
  return (
   <div className='h-screen w-full bg-red-500 '>
  <Home/>
   </div>
  )
}

export default App