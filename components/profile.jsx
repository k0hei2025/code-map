import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import classes from './profile.module.css'
import { Fragment } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { actionFileStore } from '../store/addFile'
import { useDispatch } from 'react-redux'
import { getProjects } from '../store/utils/asyncFunctions';


// component for user projects page

export default function profile() {


   const dispatch = useDispatch();
   const [data, setData] = useState([])
   const userId = useSelector((state) => state.auth.userId)

   useEffect(() => {

      const getAllProjectsData = async () => {


         // const dataObjectToArray = [];

         // const data = await fetch(`https://code-map-9f57c-default-rtdb.firebaseio.com/file/${userId}.json`);


         // const resData = await data.json()

         // for (let i in resData) {
         //    dataObjectToArray.push({
         //       id: i,
         //       fileName: resData[i].fileName,
         //    })
         //    console.log("dataObjectToArray", dataObjectToArray)
         // }
        const allProjectsData=await getProjects(userId)
         setData(allProjectsData);

         // return resData;
         return allProjectsData
      }
      getAllProjectsData();
   }, [])


   return (
      <div>
         <div style={{ textAlign: 'center', marginBottom: '8rem' }}  >
            <h1 className={classes.headingWelcome}>Welcome Back UserName!!</h1>
         </div>

         <div style={{ textAlign: 'center' }}>
            <h1 className={classes.h2} style={{ textAlign: "center" }}>My Projects</h1>

            <Grid container spacing={3} style={{ display: 'flex' }}>

               {data.map((i) => {
                  return (
                     <Fragment>
                        <Grid item md={6} sm={12}>
                           <div className={classes.fileContainer} id={i.id}>
                              <Link href={`/projectFiles?id=${i.id}`}><p onClick={() => {
                                 dispatch(actionFileStore.findId({
                                    subProjectId: i.id
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

   );
}
