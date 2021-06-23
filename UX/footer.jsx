import Image from 'next/image'
import {Grid} from '@material-ui/core'
import logo from '../UX/logo.svg'
import classes from '../UXStyle/footer.module.css'


import locationIcon from '../UXicon/icon-location.svg'

export default function footer() {
               return (
                              <Grid container className={classes.container}>
                               <Grid xs={12} md={12}>
                                <Image src={logo}
                                width={140} height={40} alt="footer icon"
                                  />
                               </Grid>

                              <Grid xs={3} md={3}>
                           <Image src={locationIcon} width={10} height={10} alt="location" />                         
                            <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                            dolore magna aliqua</b>
                               </Grid>
                               

                              <Grid xs={12} md={3}>
                               <b> +1-543-123-4567 <br />
                               example@fylo.com</b> <br />
                               </Grid>
                               

                              <Grid xs={12} md={3}>
                                  About Us<br />
                                  Jobs<br />
                                  Press<br />
                                  Blog
                               </Grid>
                               

                              <Grid xs={12} md={3}>
                               Contact Us<br />
                               Terms<br />
                               Privacy<br />
                               </Grid>
                               
                                 <Grid xs={12} md={3}>
                            
                               </Grid>
                               

                              </Grid>
               )
}
