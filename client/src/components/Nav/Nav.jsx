import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../utilities/UserContext";
import "./Nav.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "left",
    flexGrow: 1,
  },
  button: {
    // background: "#444",
    marginRight: "2em",
  },
  navbar: {
    background: "white",
    color: "#292f3c",
  },
}));

const Nav = (props) => {
  const { currentUser } = useContext(UserContext);
  const classes = useStyles();
  const { handleLogout } = props;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            THEGATHERING
          </Typography>
          <ButtonGroup variant="text" className={classes.button}>
            <Button color="inherit" component={NavLink} to="/">
              Home
            </Button>
            <Button color="inherit" component={NavLink} to="/articles">
              Articles
            </Button>
          </ButtonGroup>

          {!currentUser ? (
            <>
              <NavLink to="/login">
                <Button color="inherit">Login</Button>
              </NavLink>
              <NavLink to="/register">
                <Button color="inherit">Register</Button>
              </NavLink>
            </>
          ) : (
            <Button
              onClick={handleLogout}
              variant="contained"
              color="secondary"
              startIcon={<AccountCircle />}
            >
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
