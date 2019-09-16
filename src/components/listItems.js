import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PeopleIcon from '@material-ui/icons/People';

const logut = () => {
  signout(() => props.history.push("/"));
};

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText onClick={logut} primary="Sign Out" />
    </ListItem>
  </div>
);
export const secondaryListItems = (
  <div>
  </div>
);