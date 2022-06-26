import React from 'next'
import { Container, Grid } from '@material-ui/core'
import Image from 'next/image'
import classes from '../UXStyle/frontPage.module.css'
import Cards from './card'
import illuistration from './illustration-intro.png'
import accessAnywhere from '../UXicon/icon-access-anywhere.svg'
import anyFileIcon from '../UXicon/icon-any-file.svg'
import securityIcon from '../UXicon/icon-security.svg'
import collabarationIcon from '../UXicon/icon-collaboration.svg'
import illuistrationImage from '../UXicon/illustration-stay-productive.png'
import leftArrow from '../UXicon/icon-arrow.svg'
import bgQuotes from '../UXicon/bg-quotes.png'

import { Fragment } from 'react'


export default function frontPage() {

   return (
      <Fragment>

         <Container maxWidth='xl' className={classes.centerImage}   >

            <Grid xs={12} md={12} className={classes.centerImage}>
               <Image src={illuistration} alt='picture author' style={{ width: '20px' }} />
            </Grid>

            <Grid container  >
               <Grid xs={6} md={4} ></Grid>
               <Grid xs={12} md={4} > <h2 style={{ color: 'white', letterSpacing: '1px' }}>Managing Projects Redefined, Collaborate and Present Your Code</h2>

                  <b style={{ color: 'rgba(255,255,255,0.5)', fontweight: 'lighter', letterSpacing: '1px', fontSize: '14px' }}>CodeMap stores and Presents your code in one secure location. Access them wherever
                     you need, share and collaborate with co-workers.</b>
               </Grid>
            </Grid>

            <button className={classes.button}>Get Started</button>

         </Container>

         <Container className={classes.background} >

            <Grid container >
               <Grid md={1}></Grid>
               <Grid md={4} xs={12} className={classes.grid}>

                  <Image src={accessAnywhere} height={60} width={80} />
                  <h3 style={{ color: 'white' }}><b>Access your files, anywhere </b> </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)' }}>
                     The ability to use a smartphone, tablet, or computer to access your account means your
                     files follow you everywhere.
                  </p>
               </Grid>
               <Grid md={2} ></Grid>
               <Grid md={4} xs={12} className={classes.grid} >

                  <Image src={securityIcon} height={60} width={70} />
                  <h3 style={{ color: 'white' }}><b> Security you can trust</b></h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)' }}>

                     2-factor authentication and user-controlled encryption are just a couple of the security
                     features we allow to help secure your files.
                  </p>
               </Grid>
               <Grid md={1}></Grid>
               <Grid md={1}></Grid>
               <Grid md={4} xs={12} className={classes.grid} >


                  <Image src={collabarationIcon} height={60} width={80} />
                  <h3 style={{ color: 'white' }}><b> Real-time collaboration</b> </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)' }}> Securely share files and folders with friends, family and colleagues for live collaboration.
                  </p>
               </Grid>

               <Grid md={2}></Grid>
               <Grid md={4} xs={12} className={classes.grid} >
                  <Image src={anyFileIcon} height={60} width={80} />
                  <h3 style={{ color: 'white' }}><b> Store any type of file </b></h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)' }}>
                     Present Your Code and Manage the flow of your project with CodeMap.
                  </p>
               </Grid>
               <Grid container className={classes.productive}>
                  <Grid md={6} xs={12} className={classes.productiveImg}>
                     <Image src={illuistrationImage} alt="stay productiveImg" />
                  </Grid>

                  <Grid md={6} xs={12} className={classes.productive}>
                     <h1 style={{ color: 'white' }}> <b> Stay productive, wherever you are </b> </h1>

                     <p style={{ color: 'rgba(255,255,255,0.5)' }}>Never let location be an issue when accessing your files. CodeMap has you covered for all of your file
                        storage needs. <br />
                        <br />
                        Securely work on your Code and share files and folders with friends, family and colleagues for live collaboration.<br /></p>
                     <a href="" style={{ display: 'flex', alignItems: 'center' }}>
                        <p className={classes.text} >See how CodeMap works</p> <Image src={leftArrow} width={20} height={20} />  </a>
                  </Grid>

               </Grid>

               <Grid md={12} xs={12} className={classes.card} >
                  <Image src={bgQuotes} alt={30} width={50} />
               </Grid>

               <Grid style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <Cards />
               </Grid>

            </Grid>

         </Container>
      </Fragment>



   )
}
