import React from 'react'
import {Grid} from '@material-ui/core'
import {sideFileData} from '../components/NavigationBar/SidebarFileData'
import classes from '../components/profile.module.css'
import { Fragment } from 'react'

export default function profile() {
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

                              <Grid item md={8} sm={12}>
                                               <h1 className={classes.h2} style={{textAlign:"center"}}>My Projects</h1>
                                              {sideFileData.map((i)=>{
                                                     return (
                                                                    <Fragment>
                                                                    <div className={classes.fileContainer}  id={i.id}>
                                                                       <p><b>{i.containerName}</b></p> 

                                                                    </div>
                                                                    <div className={classes.border}></div>
                                                                    </Fragment>
                                                     )        
                                              })}
                                             </Grid>

                              </Grid>
                              
               )
}
