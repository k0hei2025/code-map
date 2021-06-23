 import React from 'next'
 import  {Container , Grid , Button , makeStyles, colors  } from '@material-ui/core'
 import Image from 'next/image'
 import teal from '@material-ui/core/colors/teal'
 import cyan from '@material-ui/core/colors/cyan'
 import classes from '../UXStyle/frontPage.module.css'
 
import Cards from './card'


 import illuistration from './illustration-intro.png'
 import curveDesktop from './bg-curvy-desktop.svg'
 import accessAnywhere from '../UXicon/icon-access-anywhere.svg'
 import anyFileIcon from '../UXicon/icon-any-file.svg'
 import securityIcon from '../UXicon/icon-security.svg'
 import collabarationIcon from '../UXicon/icon-collaboration.svg'
import illuistrationImage from '../UXicon/illustration-stay-productive.png'
import leftArrow from '../UXicon/icon-arrow.svg'
import bgQuotes from '../UXicon/bg-quotes.png'

import { Fragment } from 'react'
const useStyles = makeStyles(({
  button:{
   marginTop:"1rem",
   backgroundColor: teal[300],
   borderRadius:"3rem",
   fontWeight:"bold",
   paddingLeft:"3rem",
   paddingRight:"3rem",
   paddingTop:"12px",
   paddingBottom:"12px",
   color:'white'
   
   
  },
  background:{
                 backgroundImage: `url(${""})`,
                 padding:"15rem",
                 backgroundPosition:'center',
                 backgroundRepeat:"no-repeat",
                 backgroundSize:"cover"
                 
  },
  grid:{
    padding:"1rem"
  },
  productive:{
    textAlign:"left",
    marginTop:"6rem",
    marginBottom:"6rem"

  },
  text:{
      color: cyan[300],
      border: "thick",
      borderWidth: "thick",
      borderColor: cyan[600]
  },
  productiveImg:{
    
  }
  
}));


export default function frontPage() {

               const styles = useStyles();

               return (
                  <Fragment>
                             
                              <Container maxWidth='xl' className={classes.centerImage}   >
                                 
                                  
                                             <Grid xs={12} md={12} className={classes.centerImage}>
                                             <Image src={illuistration} alt='picture author' />
                                             </Grid>  
                                                <Grid container >
                                                <Grid xs={6} md={4} ></Grid>   
                                               <Grid xs={12} md={4} > <h1>  All your files in one secure location, accessible anywhere.</h1>

       <b>Fylo stores all your most important files in one secure location. Access them wherever 
  you need, share and collaborate with friends family, and co-workers.</b>
                                                    
                                              
                                                </Grid> 

                                            

                                                 </Grid>
                                                        
                                             
                       <div>                          
                                  
                                                <Button variant="contained"  className={styles.button}  > Get Started </Button> 

                           </div>

                              </Container>
                          <Container className={classes.background} >
                             
                             <Grid container >
                               <Grid md={1}></Grid>
                                <Grid md={4} xs={12} className={styles.grid}>
                                
                                <Image src={accessAnywhere} height={60} width={80} />
                                <h3><b>Access your files, anywhere </b> </h3>
                                <p>
  The ability to use a smartphone, tablet, or computer to access your account means your 
  files follow you everywhere. 
                                   </p>
                                </Grid>
                                 <Grid md={2} ></Grid> 
                                 <Grid md={4} xs={12} className={styles.grid} >
                                
                                <Image src={securityIcon} height={60} width={70} />
                                <h3><b> Security you can trust</b></h3>
                                <p>
  
  2-factor authentication and user-controlled encryption are just a couple of the security 
  features we allow to help secure your files.
                                   </p>
                                </Grid>
                                  <Grid md={1}></Grid>
                                 <Grid md={1}></Grid> 
                                 <Grid md={4} xs={12} className={styles.grid} >
                           
                         
                                <Image src={collabarationIcon} height={60} width={80} />
                                <h3><b> Real-time collaboration</b> </h3>
                                <p> Securely share files and folders with friends, family and colleagues for live collaboration. 
                                   </p>
                                </Grid>

                                   <Grid md={2}></Grid>
                                 <Grid md={4} xs={12} className={styles.grid} >
                                <Image src={anyFileIcon} height={60 } width={80} />
                                <h3><b> Store any type of file </b></h3>
                                <p>
  Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
  file types to be securely stored and shared.
                                   </p>
                                </Grid>
                                  <Grid container className={styles.productive}>
                                  <Grid md={6} xs={12} className={styles.productiveImg}>
                                  <Image src={illuistrationImage} alt="stay productiveImg" />
                                  </Grid>


                                  <Grid md={6} xs={12}  className={styles.productive}>
                                  <h1> <b> Stay productive, wherever you are </b> </h1>

                 <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file 
  storage needs. <br />
                 <br/>
  Securely share files and folders with friends, family and colleagues for live collaboration. No email 
  attachments required. 
   <a href="" className={styles.text} >  See how Fylo works <Image src={leftArrow} width={20} height={20} />  </a> </p>
</Grid>
  
                                  </Grid> 

                                  <Grid md={12} xs={12} className={classes.card} >
                                  <Image src={bgQuotes} alt={20} width={40} />
                                  </Grid>

                               <Grid md={4} xs={12}>
                                    <Cards/>
                               </Grid>


                               <Grid md={4} xs={12}>
                                    <Cards/>
                               </Grid>

                               <Grid md={4} xs={12}>
                                    <Cards/>
                               </Grid>

                             </Grid>
                  
            


                          </Container>
                   </Fragment>


                            
               )
}
