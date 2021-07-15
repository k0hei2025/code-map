import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AccountCircle } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'
import Link from 'next/link' 
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

const classes = makeStyles(({
               
               icon : {
                              color:"white"
               }
}))




export default function SimpleMenu() {

  const isSigned = useSelector((state)=>state.auth.signed);    
  
  let bool;

  if ( isSigned === null){
    bool = false
  }else { 
    bool = true
  }



  const style = classes();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
     <Grid container  style={{
       backgroundColor:'white'
     }}>
     <Grid item md={10} sm={11}>
       
       <b>Icon</b>
     </Grid>
     <Grid item md={2} sm={1}>
     <b>Notification</b>
      

       {bool ? <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <AccountCircle className={style.icon} />
      </Button> : <Button> Sign up </Button> }  
      
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link href='/myProfile'>Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link href='/Authentication'>My Account</Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Grid>
    </Grid>
  );
}