import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PeopleIcon from "@material-ui/icons/People";
import { withRouter } from "react-router-dom";
import { auth } from "./auth";

const MainListItems = props => {
  const logout = props => {
    console.log(props)
    auth.signout(() => props.history.push("/"));
  };
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText onClick={() => logout(props)} primary="Sign Out" />
      </ListItem>
    </div>
  );
};

export default withRouter(MainListItems);
