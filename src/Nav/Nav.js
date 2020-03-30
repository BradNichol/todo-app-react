import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Nav() {
  const useStyles = makeStyles({
    root: {
      backgroundColor: "#2b71c2"
    }
  });

  const classes = useStyles();
  return (
    <header className="container-fluid">
      <nav>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            GET SH*T DONE
            <IconButton>
              <Badge badgeContent={4} color="secondary">
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
