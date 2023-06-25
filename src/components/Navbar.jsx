import React from 'react'
import { AppBar, Toolbar, Typography, Button,Box } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { NavLink } from 'react-router-dom';
import { useFirebase } from '../Context/Firebase';
import '../styles/styles.css'

const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    title: {
      flexGrow: 1,
    },
  }));


const Navbar = () => {
    const classes = useStyles();
    const Firebase=useFirebase();
    const loggedin=Firebase.isLoggedin;

    const handlelogout=()=>{
        Firebase.logout();
        window.location.reload();
    }


  return (
    <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
   <Box flexGrow={1}>
          <Typography variant="h6">TastyBites</Typography>
        </Box>
        <Box>
          <Button color="inherit"><NavLink style={{textDecoration:'none',color:'#fff'}} to={'/'}>Home</NavLink></Button>
          <Button color="inherit"><NavLink style={{textDecoration:'none',color:'#fff'}} to={'/about'}>About</NavLink></Button>
          <Button color="inherit"><NavLink style={{textDecoration:'none',color:'#fff'}} to={'/contact'}>Contact</NavLink></Button>
          {loggedin ? 
          <Button variant="contained" color='error' style={{marginLeft:'10px'}} onClick={handlelogout}>Logout</Button>:null}
        </Box>
      </Toolbar>
  </AppBar>
  )
}

export default Navbar