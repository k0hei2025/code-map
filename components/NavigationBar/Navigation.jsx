import React from 'react';
////////////////////////////////MATERIAL UI FILES
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

///////////////////////////////
import { sideFileData } from './SidebarFileData.js'
import { useDispatch } from 'react-redux'
import Box from '../Box'
import { addComponentActions } from '../../store/addComponentSlice';
import UpperBar from './upperNavigationBar'
import { v4 as uuidv4 } from 'uuid'




const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',

  },

  appIcon: {
    color: "#F7EA00"
  },

  listColor: {
    backgroundColor: "red"
  },

  appBar: {
    backgroundColor: '#1C2431',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: 'none'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  codeCenter: {
    maxHeight:'100vh',
    backgroundColor: "#000000",
    overflowY:'scroll',
    paddingBottom: "50rem"

  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',

    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth,

  },
  contentShift: {

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

export default function PersistentDrawerLeft() {


  const dispatch = useDispatch();
  const classes = useStyles();
  const theme = useTheme();


  const [open, setOpen] = React.useState(false);
  const [Req, setReq] = React.useState(false);
  const [_Req, _setReq] = React.useState(false);


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
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton

            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide, classes.appIcon)}
          >
            <MenuIcon />
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
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <List classname={classes.listColor}>
          {sideFileData.map((text) => (

            <ListItem style={{border:`1px solid ${text.color}`,marginBottom:'0.2rem'}} button key={text.id} onClick={

              // ---------////////////////////// REDUX TOOLKIT DISPATCH
              () => {
                dispatch(addComponentActions.addComponent(
                  {
                    id: uuidv4(),
                    sideBarObject:text
                  }
                ))}
            }>
{/* ----------------------//////////////////////////// */}

              <ListItemText primary={text.containerName} />
            </ListItem>
          ))}
        </List>
        <Divider />



      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
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
