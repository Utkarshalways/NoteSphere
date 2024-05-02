import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import { useFirebase } from '../context/Firebasecontextprovider';

const Home = () => {
    // console.log("This is Home")

    const [notes,setNotes] = useState([])
    const firebase = useFirebase();
    const [userid, setUserid] = useState("")


    useEffect(() => {
      
      firebase.getNotes().then((note)=>{

        setNotes(note.docs)
      })
    
     
    }, [])

    useEffect(() => {
      
      firebase.User ? setUserid(firebase.User.uid) : setUserid("")
    
     
    }, [firebase])
    
    
    // console.log(firebase.User)
    console.log(userid);
    
    
  return (
    <>
     
    <div className=' flex items-center justify-center '>


      {
                
        notes.map((note) =>{
          {/* console.log(note.data().Uid); */}
          if (userid == note.data().Uid){

            return <div key={note.data().Uid}>{note.data().title}</div>;
          }
        
      })}
      

   

    
      </div>
    </>
  );
}

export default Home