import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Container, Grid,FormControlLabel,Checkbox } from '@mui/material';
import { useFirebase } from '../Context/Firebase';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { NavLink, useNavigate } from 'react-router-dom';



const LoginForm = () => {
const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [viewpass,setviewpass]=useState(false)
  const Firebase=useFirebase();
  
 
  



  

  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.loginwithPasswordAndUsername(email, password);
   
   
   
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
            Sign in
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
                <TextField
                  label="Password"
                  type={viewpass?"text":"password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  required
                />
              </Grid>
              
 
              <Grid item xs={12}>
              <FormControlLabel control={<Checkbox  onClick={()=>setviewpass(!viewpass)} />}  label="View Password" />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Login
                </Button>

              </Grid>
            </Grid>
          </form>
          <Typography sx={{textAlign:'center'}} >
            Don't have an account? <NavLink to={'/register'} style={{textDecoration:'none'}}>Register</NavLink>
          </Typography>
        </Grid>
      </Grid>
      
    </Container>
    <ToastContainer />  
    </>
  );
};

export default LoginForm;
