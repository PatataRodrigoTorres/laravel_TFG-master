import { Link } from 'react-router-dom';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

function AvatarList() {
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const avatars = [
    {
      src: '/img/goku.png',
      alt: 'Avatar 1',
    },
    {
      src: '/img/luffy.png',
      alt: 'Avatar 2',
    },
    {
      src: '/img/mierdon.jpg',
      alt: 'Avatar 3',
    },
    // ... agregar más avatares aquí
  ];

  const handleAvatarSelect = (src) => {
    setSelectedAvatar(src);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {avatars.map((avatar) => (
              <TableRow key={avatar.src} onClick={() => handleAvatarSelect(avatar.src)}>
                <TableCell>
                  <Link to={{ pathname: '/streeam', state: { selectedAvatar: avatar.src } }}>
                    <Avatar src={avatar.src} alt={avatar.alt} sx={{ border: selectedAvatar === avatar.src ? '2px solid blue' : 'none' }} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default AvatarList;