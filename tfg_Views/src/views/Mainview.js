import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HailSharpIcon from '@mui/icons-material/HailSharp';
import SearchIcon from '@mui/icons-material/Search';
import AvatarSelector from '../Components/AvatarSelector';
import {AvatarGrid} from '../Components/AvatarGrid';
import {SearchBar} from '../Components/SearchBar';
import {Marca} from '../Components/Marca';

export default function MainView(props) {
  const [selectedAvatar, setSelectedAvatar] = useState(
    props?.location?.state?.selectedAvatar
  );
  const [showAvatarGrid, setShowAvatarGrid] = useState(false);

  const handleAvatarSelectorClick = () => {
    setShowAvatarGrid(true);
  };

  return (
    <Grid
      container
      component="main"
      sx={{ height: '100vh', backgroundColor: 'transparent' }}
    >
      <Box
        sx={{
          flexGrow: 1,
          marginTop: 1,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={3} sm={2} md={1} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <Marca />
          </Grid>
          <Grid item xs={0} sm={1} md={4} lg={8} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
          </Grid>
          <Grid container justifyContent="center" item xs={9} sm={9} md={7} lg={3} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            {showAvatarGrid ? (
              <AvatarGrid
                onAvatarSelect={(selectedAvatar) => {
                  setSelectedAvatar(selectedAvatar);
                  setShowAvatarGrid(false);
                }}
              />
            ) : (
              <AvatarSelector
                selectedAvatar={selectedAvatar}
                onClick={handleAvatarSelectorClick}
              />
            )}
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
          </Grid>
          <Grid container justifyContent="center" item xs={0} sm={0} md={7} lg={5} sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>
            <SearchIcon />
            <SearchBar />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
