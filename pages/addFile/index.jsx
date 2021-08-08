import React, { useState } from 'react'
import {Grid, TextField} from '@material-ui/core'
import {useSelector , useDispatch} from 'react-redux'
import {actionFileStore , fileStoreSlice} from '../../store/addFile'
import Link from 'next/link'
export default function projectFile() {


               const [state , setState] = useState('')

   const allFiles = useSelector((state)=>state.fileStore.fileStore)

   const dispatch = useDispatch();
   
   const postFileHandler= async(event)=>{
     event.preventDefault();

     const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file.json`,
       {
   method : 'POST',
   body : JSON.stringify({
      id : new Date().getTime(),
      fileName : state}),
   headers : { 'Content-Type' : 'application/json'}
       })
       const resData = await data.json();
       console.log(resData);          
  
         
  
      }
   

  

   

               return (
                              <Grid container >
                                   <Grid item md={12} sm={12}>
               <form onSubmit={postFileHandler}>
                <TextField id="outlined-basic" label="FileName" variant="outlined" value={state} onChange={(event)=>{
                               setState(event.target.value)
                }}/>   
                <button onClick={postFileHandler} style={{
                               backgroundColor:'yellow',
                               fontWeight:'bold',
                               padding:'2rem',
                               borderRadius:'1rem'
                }}> Submit </button>
                <Link style={{backgroundColor:'yellow' , padding :'1rem'}} href='./myProfile'>Go back to Profile</Link>
                </form>       
                              </Grid>
                              </Grid>
               )
}
