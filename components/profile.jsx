import React from 'react'
import {Grid} from '@material-ui/core'
import {sideFileData} from '../components/NavigationBar/SidebarFileData'
import classes from '../components/profile.module.css'
import { Fragment } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Link from 'next/link'
import projectFile from '../pages/addFile'
import { useSelector } from 'react-redux'

export default function profile() {


   const allFiles = useSelector((state)=>state.fileStore.fileStore)
   
   console.log(allFiles)

               return ( 
                              <Grid container spacing={3}>
                                             <Grid item md={4} sm={12}>
                                                <div className={classes.icon}>
                                                </div>
                                                <br/>
                                                <br/>
                                                <h2 className={classes.h2}>UserName</h2>
                                                <br/>
                                                <br/>
                                                <h3 className={classes.h2}><b>Description</b></h3>
                                             </Grid>

                              <Grid item md={8} sm={12}  >
                                               <h1 className={classes.h2} style={{textAlign:"center"}}>My Projects</h1>
                                               
                                              <Grid container spacing={3} style={{display:'flex'}}>
                                              {allFiles.map((i)=>{
                                                     return (  
                                                        <Fragment>
                                                                                          <Grid item md={6} sm={12}>
                                                                    <div className={classes.fileContainer}  id={i.id}>
                                                                       <p style={{color:'white'}}><b>{i.name}</b></p> 
                                                                                                                                                                                   
                                                                             
                                                                    </div>
                                                                                      
                                                                  <div className={classes.border}></div>
                                                                  </Grid>
                                                                  
                                                </Fragment>
                                                     )        
                                              })}
                                              <Grid  className={classes.addButton} item md={12} sm={12}>
                                             
                                         <Link href="./addFile" ><AddCircleOutlineIcon style={{ width:'50px' , height:'50px'}}/></Link>    
                                              </Grid>
                                              </Grid>
                                              
                                             </Grid>

                                           
                              </Grid>
                              
                              
               )
}
