import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const UserAvatar = ({src}) => {
  return (
    <Avatar src={src} alt="user avatar" />
  );
};

export default UserAvatar;
