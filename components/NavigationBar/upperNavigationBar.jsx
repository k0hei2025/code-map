import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AccountCircle } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles'
import Link from 'next/link' 


const classes = makeStyles(({
               
               icon : {
                              color:"white"
               }
}))




export default function SimpleMenu() {

               const style = classes();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
     <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <AccountCircle className={style.icon} />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link href='/myProfile'>Profile</Link></MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}