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
     
    <div className=' '>

        This is the Home Page Here you will see your all the notes that you have been created

      {
                
        notes.map((note) =>{
          {/* console.log(note.data().Uid); */}
          if (userid == note.data().Uid){

            return <div key={note.data().Uid} 
            className='flex justify-center items-center m-4 '
            >

              <Card {...note.data()}></Card>
            </div>;
            
            
          }
        
      })}
      

  
      </div>
    </>
  );
}

export default Home