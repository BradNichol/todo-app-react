import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Logo from "./GSD-03.png";

function Nav(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      backgroundColor: "#2b71c2",
    },

    toolbar: {
      [theme.breakpoints.up("lg")]: {
        width: "50%",
        margin: "auto",
      },
    },

    taskNotification: {
      marginLeft: "auto",
    },
  }));

  const classes = useStyles();
  return (
    <header className="container-fluid">
      <nav>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar className={classes.toolbar}>
            <img src={Logo} width="150" />
            <IconButton className={classes.taskNotification}>
              <Badge badgeContent={props.taskCount} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </nav>
    </header>
  );
}

export default Nav;
