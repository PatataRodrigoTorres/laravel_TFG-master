import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import '../styles/login.css';
import { style } from '@mui/system';
/* import Cartas from './Cartas'; */



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Lamamadelamama.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
function Marca(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <br />
      <br />
      <br />
      <br />
      <img src="https://i.gyazo.com/88de59a0b7194da1c6106dab5faeb84a.png" alt="Descripción de la imagen" height={200} />
      <Typography align="center">
        {/*      <h1>Streeam</h1>  */}
      </Typography>
    </div>
  );
}



export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');


    axios.post(`https://daw217.medacarena.es/api/auth/login?email=${email}&password=${password}`)
      .then((response) => {

        console.log({
          response
        });
      }).catch((response) => {
        console.log("Failed to login");
      })


  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>

      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={false}
        md={7}
        sx={{
          backgroundImage: 'url(/img/Login_image.png)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#12153f',
          backgroundSize: 'cover',
        }}
      />

      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        sx={{
          backgroundColor: '#12153f',
          color: 'white',
        }}
        component={Paper}
        elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#E3BD5F' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                className: 'white-input',
                style: { color: 'white' }
              }}
              InputLabelProps={{
                style: { color: 'white' }
              }}

            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                className: 'white-input',
                style: { color: 'white' }
              }}
              InputLabelProps={{
                style: { color: 'white' }
              }}
            />


            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" sx={{ '& .MuiSvgIcon-root': { fontSize: 28, color: '#E3BD5F' } }} />
              }
              label="Remember me"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: '#E3BD5F' }}
            >
              <Link href="/streeam" style={{ textDecoration: 'none', color: '#12153f', fontWeight: 'bold' }} >
                Iniciar Sesion
              </Link>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/register" variant="body2" sx={{ color: 'white', underline: 'always' }}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/login" variant="body2" sx={{ color: 'white', underline: 'always' }}>

                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

          </Box>

          <Marca />
          <Copyright sx={{ mt: 5, color: 'white' }} />
        </Box>

      </Grid>
    </Grid>


  );

}
