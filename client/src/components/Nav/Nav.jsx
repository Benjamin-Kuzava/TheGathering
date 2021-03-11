import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../utilities/UserContext";
import HideOnScroll from "./HideOnScroll";
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
    letterSpacing: "3px",
  },
  button: {
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
      <HideOnScroll {...props}>
        <AppBar position="fixed" className={classes.navbar}>
          <Toolbar
            component={Grid}
            container
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography
                variant="h5"
                className={classes.title}
                component={NavLink}
                to="/"
              >
                THE GATHERING
              </Typography>
            </Grid>
            <Grid item>
              {!currentUser ? (
                <>
                  <Button color="inherit" component={NavLink} to="/login">
                    Login
                  </Button>
                  <Button color="inherit" component={NavLink} to="/register">
                    Register
                  </Button>
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
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Nav;
