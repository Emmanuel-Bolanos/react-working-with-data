import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import UserAvatar from '../molecules/Avatar';
import UserName from '../molecules/UserName';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '40%',
    minWidth: 'fit-content',
    boxShadow: '2px 2px 4px black',
    margin: '2rem',
    backgroundColor: theme.palette.primary.main,
  },
  listItems: {
    padding: '1rem',
  }
}));

const fullname = (usr) => {
  return `${usr.first_name} ${usr.last_name}`
};

const UserList = ({usersData}) => {
  const classes = useStyles();

  const users = (usersData.length === 0) 
  ? <ListItem> No users! </ListItem>
  : usersData.map((user) => {
    return (
      <React.Fragment key={user.id}>
        <ListItem className={classes.listItems} alignItems="center"> 
          <ListItemAvatar>
            <UserAvatar src={user.avatar}/> 
          </ListItemAvatar>
          <ListItemText
            primary={<UserName fullname={fullname(user)} />}
          />
        </ListItem>
        <Divider variant="middle" />
      </React.Fragment>
    )
  });
  return (
    <List 
      className={classes.root}
    >
      {users}
    </List>
  )
}

export default UserList;
