import React from 'react';

export const AvatarGrid = ({ onAvatarSelect }) => {
  const avatars = [
    {
      id: 1,
      imageSrc: '/avatar1.png',
    },
    {
      id: 2,
      imageSrc: '/avatar2.png',
    },
    {
      id: 3,
      imageSrc: '/avatar3.png',
    },
    // Agrega tantos avatares como quieras
  ];

  const handleAvatarClick = (avatar) => {
    onAvatarSelect(avatar);
  };

  return (
    <div>
      {avatars.map((avatar) => (
        <img
          key={avatar.id}
          src={avatar.imageSrc}
          alt={`Avatar ${avatar.id}`}
          onClick={() => handleAvatarClick(avatar)}
        />
      ))}
    </div>
  );
};