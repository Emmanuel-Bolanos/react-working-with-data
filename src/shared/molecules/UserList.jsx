import React from 'react';
import UserAvatar from '../organisms/Avatar';
import UserName from '../organisms/UserName';

const fullname = (usr) => {
  return `${usr.first_name} ${usr.last_name}`
};

const UserList = ({usersData}) => {
  const users = (usersData.length === 0) 
  ? <li> No users! </li>
  : usersData.map((user) => {
    return (
      <li key={user.id}> 
        <UserAvatar src={user.avatar}/> 
        <UserName fullname={fullname(user)} />
      </li>
    )
  });
  return (
    <ul>
      {users}
    </ul>
  )
}

export default UserList;
