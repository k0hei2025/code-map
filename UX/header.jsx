import Image from 'next/image'
import {Grid , makeStyles} from '@material-ui/core'
 import  {Container } from '@material-ui/core'

 import classes from '../UXStyle/frontPage.module.css'
 
import logo from './logo.svg'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    letterSpacing:'3px',
    color:'white',
    fontWeight:"1px",
    textTransform:'UpperCase'
    
  },
}));


export default function header() {

const Inclasses = useStyles();
                                         
               return (

<Container maxWidth='xl' className={classes.body}   >
                                   
                              <div className={Inclasses.root} >
                                 <Grid container spacing={1}>
                                 
                                              <Grid item xs={3} md={9} >
                                              <Image src={logo} alt="picture author" width={140} height={40}/>
                                               </Grid>
                                 <Grid item xs={3} md={1} className={Inclasses.paper} >
                                        <b>Features</b>   
                                 </Grid>
                                 <Grid item xs={3} md={1} className={Inclasses.paper} >
                                           <b>Team</b>
                                 </Grid>
                                 <Grid item xs={3} md={1} className={Inclasses.paper} >
                                           <b>Signin</b>
                                 </Grid>
                               </Grid>
                               </div>               
                                                                                   
                              </Container>

                         
               )
}
