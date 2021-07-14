import React, { useState } from 'react'
import {Grid, TextField} from '@material-ui/core'
import {useSelector , useDispatch} from 'react-redux'
import {actionFileStore , fileStoreSlice} from '../../store/addFile'
import Link from 'next/link'
export default function projectFile() {


               const [state , setState] = useState('')

   const allFiles = useSelector((state)=>state.fileStore.fileStore)

   const dispatch = useDispatch();
       

   const addFileHandler=(event)=>{
      event.preventDefault();
dispatch(fileStoreSlice.actions.addFile({
               id : new Date().getTime(),
               name : state
}))

console.log( allFiles , 'ffile added successfully')
   }

               return (
                              <Grid container >
                                   <Grid item md={12} sm={12}>
               <form onSubmit={addFileHandler}>
                <TextField id="outlined-basic" label="FileName" variant="outlined" value={state} onChange={(event)=>{
                               setState(event.target.value)
                }}/>   
                <button onClick={addFileHandler} style={{
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
