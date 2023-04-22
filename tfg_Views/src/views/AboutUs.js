import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Marca } from '../Components/Marca'
import HailSharpIcon from '@mui/icons-material/HailSharp';
import Cartas from '../Components/Cartas';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../styles/aboutus.css'





export default function BasicGrid() {
/*   const [netflixSeries, setNetflixSeries] = useState([]);
  const [hboSeries, setHboSeries] = useState([]);
  const [primeVideoSeries, setPrimeVideoSeries] = useState([]);
  const [crunchyrollSeries, setCrunchyrollSeries] = useState([]);
  const [filminSeries, setFilminSeries] = useState([]);
  const [disneyPlusSeries, setDisneyPlusSeries] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=213&sort_by=first_air_date.desc&language=es-ES&page=1&include_null_first_air_dates=false')
      .then(response => {
        setNetflixSeries(response.data.results.slice(0, 3));
      })
      .catch(error => {
        console.log(error);
      });
  
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=49&sort_by=first_air_date.desc&language=es-ES&page=1&include_null_first_air_dates=false')
      .then(response => {
        setHboSeries(response.data.results.slice(0, 3));
      })
      .catch(error => {
        console.log(error);
      });
  
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=1024&sort_by=first_air_date.desc&language=es-ES&page=1&include_null_first_air_dates=false')
      .then(response => {
        setPrimeVideoSeries(response.data.results.slice(0, 3));
      })
      .catch(error => {
        console.log(error);
      });
  
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=2138&sort_by=first_air_date.desc&language=es-ES&page=1&include_null_first_air_dates=false')
      .then(response => {
        setCrunchyrollSeries(response.data.results.slice(0, 3));
      })
      .catch(error => {
        console.log(error);
      });
  
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=2437&sort_by=first_air_date.desc&language=es-ES&page=1&include_null_first_air_dates=false')
      .then(response => {
        setFilminSeries(response.data.results.slice(0, 3));
      })
      .catch(error => {
        console.log(error);
      });
  
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=2739&sort_by=first_air_date.desc&language=es-ES&page=1&include_null_first_air_dates=false')
    .then(response => {
      setDisneyPlusSeries(response.data.results.slice(0, 3));
    })
    .catch(error => {
      console.log(error);
    })
  }, []); */
  const [movies, setMovies] = useState([]);

useEffect(() => {
  Promise.all([
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=213&sort_by=vote_average.desc&vote_count.gte=50&page=1&language=es-ES'),
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=49&sort_by=vote_average.desc&vote_count.gte=50&page=1&language=es-ES'),
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=1024&sort_by=vote_average.desc&vote_count.gte=50&page=1&language=es-ES'),
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=2552&sort_by=vote_average.desc&vote_count.gte=50&page=1&language=es-ES'),
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=2007&sort_by=vote_average.desc&vote_count.gte=50&page=1&language=es-ES'),
    axios.get('https://api.themoviedb.org/3/discover/tv?api_key=00ce2a238226c7a5e058b3803cffe97f&with_networks=2739&sort_by=vote_average.desc&vote_count.gte=50&page=1&language=es-ES')
  ]).then(([netflixResponse, hboResponse, primeVideoResponse, crunchyrollResponse, filminResponse, disneyPlusResponse]) => {
    const netflixSeries = netflixResponse.data.results.slice(0, 3);
    const hboSeries = hboResponse.data.results.slice(0, 3);
    const primeVideoSeries = primeVideoResponse.data.results.slice(0, 3);
    const crunchyrollSeries = crunchyrollResponse.data.results.slice(0, 3);
    const filminSeries = filminResponse.data.results.slice(0, 3);
    const disneyPlusSeries = disneyPlusResponse.data.results.slice(0, 3);
    
    const allSeries = [
      ...netflixSeries,
      ...hboSeries,
      ...primeVideoSeries,
      ...crunchyrollSeries,
      ...filminSeries,
      ...disneyPlusSeries
    ];
    
    setMovies(allSeries);
  }).catch(error => {
    console.log(error);
  })
}, []);



  return (

    <Grid container component="main" sx={{ height: '100vh', backgroundColor: 'transparent' }}>
      <Box sx={{
        flexGrow: 1, marginTop: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        {/* LINEA 1 */}
        <Grid container spacing={0}>
          <Grid item xs={3} sm={2} md={1} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <Marca />
          </Grid>
          <Grid item xs={0} sm={1} md={4} lg={8} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          </Grid>
          <Grid container justifyContent="center" item xs={9} sm={9} md={7} lg={3} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <Button
              variant="outlined"
              size='medium'
              sx={{
                color: '#e4bd5f',
                borderColor: '#e4bd5f',
                borderRadius: 2.5,
                marginRight: 2,
                marginLeft: 1,
                height: 50,
                marginTop: 1.8
              }}
            >
              <HailSharpIcon />
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: '#e4bd5f'
                }}
                activeStyle={{
                  color: '#e4bd5f'
                }}
              >
                Login
              </Link>
            </Button>
            <Button
              variant="outlined"
              size='large'
              sx={{
                color: '#e4bd5f',
                borderColor: '#e4bd5f',
                borderRadius: 2.5,
                marginRight: 1,
                marginLeft: 0,
                height: 50,
                marginTop: 1.8
              }}
            >
              <HailSharpIcon />
              <Link
                to="/login"
                style={{
                  textDecoration: 'none',
                  color: '#e4bd5f'
                }}
                activeStyle={{
                  color: '#e4bd5f'
                }}
              >Registro </Link></Button>
          </Grid>
          <Grid item lg={2} />
          {/* LINEA 2 */}
          <Grid item xs={12} sm={12} md={12} lg={8}
            sx={{
              marginLeft: 0,
              height: '100%',
              width: '100%',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img src="https://i.gyazo.com/b9771323d76a453ccd463eb8422c1679.png" alt="imagen" width="100%" height="100%" />
            <Grid item lg={2} />

          </Grid>
          <Box sx={{ display: 'block' }}>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', textAlign: 'center' }}>
              <Typography variant="h2" component="h2" sx={{ color: 'white', fontFamily: 'ProximaNova-Bold,Arial,sans-serif', lineHeight: '1.2', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {movies.map(movie => (
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width="10%"
                  height="auto"

                  style={{ margin: '0 10px 10px 0' }}
                />
              ))}
            </Box>
          </Box>
          {/* LINEA 3 */}
          <Grid item xs={12} sm={12} md={10} lg={8}
            sx={{
              marginLeft: 0,
              height: 'auto',
              position: 'relative',
            }}
          >
            <img src="https://i.gyazo.com/eb7c4a9d20a3e3f0b82e41ea7734b995.jpg" alt="imagen" width="100%" height="auto" />
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: '50%',
                backgroundImage: 'linear-gradient(to right, rgba(64,57,53,0), #12153f)',
              }}
            />
          </Grid>
          <Grid item xs={false} sm={false} md={2} lg={4}>
            <Cartas />
          </Grid>
          {/* LINEA 4 */}
          <Grid item xs={4} sm={4} md={4} lg={4}>
          </Grid>
          <Grid item xs={8} sm={8} md={8} lg={8}
            sx={{
              marginLeft: 0,
              height: 'auto',
              position: 'relative',
            }}
          >
            <img src="https://i.gyazo.com/8b800675da8a8b86c7c44c97d83b31e5.jpg" alt="imagen" width="100%" />
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '50%',
                height: 'auto',
                backgroundImage: 'linear-gradient(to left, rgba(64,57,53,0), #12153f)',
              }}
            />
          </Grid>

        </Grid>
      </Box>
    </Grid>
  );
}