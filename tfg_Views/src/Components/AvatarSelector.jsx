import React from 'react';
import { Avatar, Typography, Box } from '@mui/material';

const AvatarSelector = ({ selectedAvatar, onClick }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 180,
        borderRadius: '50%',
        backgroundColor: 'rgba(228, 189, 95, 0.5)',
        boxShadow: '0px 0px 5px 2px rgba(0,0,0,0.2)',
        margin: 'auto',
        marginTop: '20px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {selectedAvatar ? (
        <Avatar
          src={selectedAvatar.imageSrc}
          sx={{ width: 150, height: 150, borderRadius: '50%' }}
        />
      ) : (
        <Typography variant="h5" sx={{ color: '#e4bd5f' }}>
          Click para seleccionar un avatar
        </Typography>
      )}
    </Box>
  );
};

export default AvatarSelector;