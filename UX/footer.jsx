import Image from 'next/image'
import logo from '../UX/logo.svg'
import classes from '../UXStyle/footer.module.css'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import locationIcon from '../UXicon/icon-location.svg'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
export default function footer() {
   return (

      <div className={classes.container}>
         <Image src={logo}
            width={140} height={40} alt="footer icon"
         />
         <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', width: '350px' }}>
               <Image src={locationIcon} width={40} height={40} alt="location" />
               <p style={{ marginLeft: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua</p>
            </div>
            <div>
               <div>
                  <p><PhoneIcon style={{ transform: 'translateY(5px)', marginRight: '10px' }} />+1-543-123-4567</p>
               </div>
               <div>
                  <p><EmailIcon style={{ transform: 'translateY(5px)', marginRight: '10px' }} />example@fylo.com</p>
               </div>
            </div>
            <div>
               <p>About Us</p>
               <p>Jobs</p>
               <p>Press</p>
               <p>Blog</p>
            </div>
            <div>
               <p>Contact Us</p>
               <p>Terms</p>
               <p>Privacy</p>
            </div>
            <div style={{ marginTop: '16px' }}>
               <FacebookIcon style={{ marginRight: '10px' }} />
               <TwitterIcon style={{ marginRight: '10px' }} />
               <InstagramIcon />
            </div>
         </div>

      </div>
   );
}
