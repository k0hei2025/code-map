import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { sideFileData } from '../components/NavigationBar/SidebarFileData'
import classes from './profile.module.css'
import { Fragment } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Link from 'next/link'
import projectFile from '../pages/addFile'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { actionFileStore } from '../store/addFile'

import { useDispatch } from 'react-redux'



export default function profile() {



   const router = useRouter();
   const dispatch = useDispatch();


   const [data, setData] = useState([])

   const allFiles = useSelector((state) => state.fileStore.fileStore)

   const projectId = useSelector((state) => state.fileStore.myProfile)


               const token = useSelector((state) => state.auth.tokenId)
               const userId = useSelector((state) => state.auth.userId)





   console.log('------projectId', projectId)



          

   useEffect(() => {

      console.log("token in profile.jsx" , token , userId) 

      const fileData = async () => {



         const dataObjectToArray = [];

         const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file.json?auth=${token}`);




         const resData = await data.json()

         console.log("resData", resData)

         for (let i in resData) {
            dataObjectToArray.push({
               id: i,
               fileName: resData[i].fileName,
            })
            console.log("dataObjectToArray", dataObjectToArray)
         }



         setData(dataObjectToArray);




         return resData;
      }

      fileData();
   }, [])









   console.log('values', allFiles)




   return (
<div>

<div style={{textAlign:'center',marginBottom:'8rem'}}  >

            <h1 className={classes.headingWelcome}>Welcome Back UserName!!</h1>
         </div>

 
 <div style={{textAlign:'center'}}>
 <h1 className={classes.h2} style={{ textAlign: "center" }}>My Projects</h1>

<Grid container spacing={3} style={{ display: 'flex' }}>



   {data.map((i) => {




      console.log(i)
      return (
         <Fragment>
            <Grid item md={6} sm={12}>
               <div className={classes.fileContainer} id={i.id}>
                  <Link href={`/projectFiles?id=${i.id}`}><p onClick={() => {
                     dispatch(actionFileStore.findId({
                        myProfileId: i.id
                     }))

                  }} style={{ color: 'white' }}><b>{i.fileName}</b></p></Link>


               </div>

               <div className={classes.border}></div>
            </Grid>

         </Fragment>
      )
   })}
   <div className={classes.addButton}>

      <Link href="./addFile" ><AddCircleOutlineIcon className={classes.buttonAdd} style={{ width: '70px', height: '70px' }} /></Link>
   </div>
</Grid>
 </div>
    
  


</div>
           





   )
}
