import React, { useState , useEffect } from 'react'
import { Grid, TextField } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux'
import { actionFileStore, fileStoreSlice } from '../../store/addFile'
import Link from 'next/link'
export default function projectFile() {


  const [state, setState] = useState('')

  const allFiles = useSelector((state) => state.fileStore.fileStore)
  const token = useSelector((state) => state.auth.tokenId)
  const userId = useSelector((state)=>state.auth.userId)


  

  const dispatch = useDispatch();


  useEffect(()=>{
    console.log(token , userId);
  },[token , userId,])


  const postFileHandler = async (event) => {
    event.preventDefault();

    const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}.json`,
      {
        method: 'POST',
        body: JSON.stringify({
          id: new Date().getTime(),
          fileName: state,
          //  subFolder: [""]
        }),
        headers: { 'Content-Type': 'application/json' }
      })
    const resData = await data.json();
    console.log(resData);



  }






  return (
    <div>
    <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)'}}>
      <form onSubmit={postFileHandler}
      style={{display:'flex',flexDirection:'column',alignItems:'center'}}
      >
        <input id="outlined-basic" placeholder='Enter File Name' style={{height:'40px',width:'300px',marginBottom:'40px'}} value={state} onChange={(event) => {
          setState(event.target.value)
        }} />
        <button onClick={postFileHandler} style={{
          backgroundColor: 'yellow',
          fontWeight: 'bold',
          padding: '1rem 2rem',
          borderRadius: '5px',
          letterSpacing:'1px',
          textTransform:'uppercase',
          fontSize:'15px',
          fontWeight:'500',
          border:'none',
          marginBottom:'10px'
        }}> Submit </button>
        <Link href='./myProfile'><span style={{color:'white',letterSpacing:'1px'}}>Go back to Profile</span></Link>
      </form>
    </div>
  </div>
  )
}
