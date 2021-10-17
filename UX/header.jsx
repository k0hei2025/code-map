import Image from 'next/image'
import { Grid } from '@material-ui/core'
import { Container } from '@material-ui/core'
import classes from '../UXStyle/frontPage.module.css'
import logo from './logo.png'




export default function header() {

       return (

              <Container maxWidth='xl' className={classes.body}   >

                     <div className={classes.root} >
                            <Grid container spacing={1}>

                                   <Grid item xs={3} md={9} >
                                          <Image src={logo} alt="picture author" width={140} height={40} />
                                   </Grid>
                                   <Grid item xs={3} md={1} className={classes.paper} >
                                          <b className={classes.titles}>Features</b>
                                   </Grid>
                                   <Grid item xs={3} md={1} className={classes.paper} >
                                          <b className={classes.titles}>Team</b>
                                   </Grid>
                                   <Grid item xs={3} md={1} className={classes.paper} >
                                          <a href="/Authentication" > <b className={classes.titles}>Signin</b></a>
                                   </Grid>
                            </Grid>
                     </div>

              </Container>


       )
}
