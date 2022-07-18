import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Container, Grid } from '@material-ui/core';
import { sideFileData } from './SidebarFileData.js'
import { useDispatch, useSelector } from 'react-redux'
import Box from '../Box'
import { useRouter } from 'next/router'
import classes from './navigation.module.css'
import { addComponentActions } from '../../store/addComponentSlice';
import UpperBar from './upperNavigationBar'
import { v4 as uuidv4 } from 'uuid'


const drawerWidth = 240;


export default function PersistentDrawerLeft() {


  const router = useRouter();
  const dispatch = useDispatch();
  const allCodes = useSelector((state) => state.editor.allCodes)
  const [open, setOpen] = React.useState(false);
  const [Req, setReq] = React.useState(false);
  const [_Req, _setReq] = React.useState(false);



  const addCardHandler = () => {
    dispatch(addComponentActions.addComponent(
      {
        id: uuidv4(),
        name: 'dekf frf'
      }
    ))
  }



  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const handleClick = () => {
    setReq(!Req);
  };


  const _handleClick = () => {
    _setReq(!_Req);
  };

  const content = <p> <b> Access Right </b> </p>

  const fd = () => {
    <UpperBar />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: '#1C2431' }}
        position="fixed"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton

            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={classes.menuButton}
          >
            <MenuIcon style={{ color: 'yellow' }} />
          </IconButton>

          <Grid md='9' sm='2' >
            Icon
          </Grid>
          <Grid md='1'>

            <ListItem button onClick={handleClick}>

              <UpperBar />

            </ListItem>
          </Grid>

          <Grid md='1'>
            <ListItem button onClick={_handleClick}>

              <UpperBar />

            </ListItem>
          </Grid>
        </Toolbar>

      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />

          </IconButton>
        </div>

        <List classname={classes.listColor}>
          {sideFileData.map((text) => (

            <ListItem style={{
              marginBottom: '.2rem',
              border: ` 3px solid ${text.color}`
            }
            } button key={text.id}
              onClick={
                () => {
                  dispatch(addComponentActions.addComponent(
                    {
                      id: uuidv4(),
                      sideBarObject: text,
                    }
                  ))
                }
              }>


              <ListItemText primary={text.containerName} />
            </ListItem>
          ))}
        </List>
        <Divider />



      </Drawer>
      <main
        className={classes.content}
      >
        <div className={classes.drawerHeader} />
        <Container maxWidth='xl'>
          <div className={classes.codeCenter}  >

            <Box />
          </div>
        </Container>
      </main>
    </div>
  );
}