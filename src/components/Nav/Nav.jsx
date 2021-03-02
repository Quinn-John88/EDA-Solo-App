// import React from 'react';
// import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';
// import './Nav.css';
// import { useSelector } from 'react-redux';

// function Nav() {
//   const user = useSelector((store) => store.user);

//   let loginLinkData = {
//     path: '/login',
//     text: 'Login / Register',
//   };

//   if (user.id != null) {
//     loginLinkData.path = '/user';
//     loginLinkData.text = 'Home';
//   }

//   return (
//     <div className="nav">
//       <Link to="/home">
//         <h2 className="nav-title">Prime Solo Project</h2>
//       </Link>
//       <div>
//         <Link className="navLink" to={loginLinkData.path}>
//           {loginLinkData.text}
//         </Link>
//         <Link className="navLink" to="/about">
//           About
//         </Link>
//         {user.id && (
//           <>
//             <Link className="navLink" to="/userIngredients">
//               Ingredients
//             </Link>
//             <Link className='navLink' to="recipes">
//               Cookable Recipes
//             </Link>
//             <LogOutButton className="navLink" />
//           </>
//         )}

//       </div>
//     </div>
//   );
// }
import { React, useState } from 'react'
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import './Nav.css';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import KitchenIcon from '@material-ui/icons/Kitchen';
import HelpIcon from '@material-ui/icons/Help';
import List from '@material-ui/core/List';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import FavoriteIcon from '@material-ui/icons/Favorite';


function Nav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const history = useHistory();

  function hanldeRecipeClick() {
    history.push('/recipes')
    handleDrawerClose();
  }
  function handleIngredientClick() {
    history.push('/userIngredients')
    handleDrawerClose();
  }
  function handleFavoriteClick() {
    history.push('/favorites')
    handleDrawerClose();
  }
  function handleAboutClick() {
    history.push('/about')
    handleDrawerClose();
  }
  function handleClickHome() {
    history.push('/home')
  }
  function handleLogout() {
    history.push('/user')
    dispatch({ type: 'LOGOUT'});
    handleDrawerClose();
  }
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  }));

  const classes = useStyles();

  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            color="inherit"
            aria-label='open drawer'
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            edge="start"
            color='inherit'
            onClick={handleClickHome}
          >
            <HomeIcon/>
          </IconButton>
            <Typography>Home Cook Helper</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={hanldeRecipeClick}  >
            <ListItemIcon ><FastfoodIcon /><ListItemText primary='Recipes' /></ListItemIcon>
          </ListItem>
          <ListItem button onClick={handleIngredientClick}>
            <ListItemIcon><KitchenIcon /><ListItemText primary='Ingredients' /></ListItemIcon>
          </ListItem>
          <ListItem button onClick={handleFavoriteClick}  >
            <ListItemIcon><FavoriteIcon/><ListItemText primary='Favorites' /></ListItemIcon>
          </ListItem>
          <ListItem button onClick={handleAboutClick} >
            <ListItemIcon><HelpIcon /><ListItemText primary='About' /></ListItemIcon>
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon><ExitToAppIcon/><ListItemText primary='Login/Logout'/></ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
      <Button>
        <Link herf={loginLinkData.path}>
          {loginLinkData.text}
        </Link>
      </Button>
    </div>
  );
}

export default Nav;
