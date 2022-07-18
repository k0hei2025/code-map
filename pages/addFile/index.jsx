import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Link from 'next/link'
import router from 'next/router'
import classes from './addFile.module.css'
import { sendFile } from '../../store/utils/asyncFunctions'

export default function projectFile() {
  
  const dispatch = useDispatch();

  const [projectName, setProjectName] = useState('')
  const allFiles = useSelector((state) => state.fileStore.fileStore)
  const token = useSelector((state) => state.auth.tokenId)
  const userId = useSelector((state) => state.auth.userId)


  useEffect(() => {
    console.log(token, userId);
  }, [token, userId,])


  const postFileHandler = async (event) => {
    event.preventDefault();

    // const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}.json`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       id: new Date().getTime(),
    //       fileName: state,
    //       //  subFolder: [""]
    //     }),
    //     headers: { 'Content-Type': 'application/json' }
    //   })
    // const resData = await data.json();
    // console.log("=====1"+userId)
    const resData=await sendFile(userId,projectName);
    // console.log("================")
    // console.log(resData);

    // if (state !== '') {
    //   router.push('/myProfile')
    // }




  }


  return (
    <div>
      <div className={classes.addFileDiv}>
        <form onSubmit={postFileHandler}
          className={classes.addFileForm}
        >
          <input id="outlined-basic" placeholder='Enter File Name' className={classes.addFileInput} value={projectName} onChange={(event) => {
            setProjectName(event.target.value)

          }} />
          <button onClick={postFileHandler} className={classes.addFileButton}> Submit </button>
          <Link href='./myProfile'><span className={classes.addFileLink}>Go back to Profile</span></Link>
        </form>
      </div>
    </div>
  )
}
