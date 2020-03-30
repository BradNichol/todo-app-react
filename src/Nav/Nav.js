import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/Menu";

function Nav() {
  return (
    <header className="container-fluid">
      <nav>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
            GET SH*T DONE
          </Toolbar>
        </AppBar>
        <Toolbar />
      </nav>
    </header>
  );
}

export default Nav;
