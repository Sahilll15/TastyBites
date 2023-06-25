import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Grid,FormControlLabel,Checkbox } from '@mui/material';
import { useFirebase } from '../Context/Firebase';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink, useNavigate } from 'react-router-dom';



const Resetpassword = () => {
const navigate=useNavigate();
  const [email, setEmail] = useState('');
 
  const Firebase=useFirebase();
  
 
  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.resetPassword(email);
   
   
   
  };

  useEffect(()=>{
    if(Firebase.isLoggedin){
      navigate('/')
      
    }
  })

  return (<>
    <Container maxWidth="sm">
  
      <Grid container justify="center" alignItems="center" style={{ height: '100vh' }}>
     
        <Grid item xs={12}>
        <Avatar style={{ margin: 'auto' }} sx={{ m: 1, bgcolor: 'primary.main' }} >
        <LockOutlinedIcon />
      </Avatar>

          <Typography variant="h4" align="center" gutterBottom>
            Reset password
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
            
              <Grid item xs={12}>
             
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Send Email
                </Button>
                <Typography sx={{textAlign:'center'}} >
            Go back? <NavLink to={'/login'} style={{textDecoration:'none'}}>Login</NavLink>
          </Typography>

              </Grid>
            </Grid>
          </form>
         
        </Grid>
      </Grid>
      
    </Container>
    <ToastContainer />  
    </>
  );
};

export default Resetpassword;
