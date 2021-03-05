import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    // background: "#444",
    marginRight: "2em",
  },
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            THEGATHERING
          </Typography>
          <ButtonGroup variant="text" className={classes.button}>
            <NavLink to="/">
              <Button color="inherit">Home</Button>
            </NavLink>
            <NavLink to="/articles">
              <Button color="inherit">Articles</Button>
            </NavLink>
          </ButtonGroup>

          {/* <Typography variant="h7" className={classes.title}>
            <NavLink to="/">Home</NavLink>
          </Typography> */}
          {/* <Typography variant="h7" className={classes.title}>
            <NavLink to="/articles">Articles</NavLink>
          </Typography> */}
          <NavLink to="/login">
            <Button color="inherit">Login</Button>
          </NavLink>
          <NavLink to="/register">
            <Button color="inherit">Register</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
    // <nav>
    //   <NavLink to="/">THEGATHERING</NavLink>
    //   <NavLink to="/articles">Articles</NavLink>
    //   <NavLink to="/login">Sign In</NavLink>
    //   <NavLink to="/register">Sign Up</NavLink>
    // </nav>
  );
};

export default Nav;
