import {
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../utilities/UserContext";
import "./Footer.css";

const useStyles = makeStyles({
  divider: {
    backgroundColor: "#eceef7",
    marginBottom: ".05em",
    width: "5em",
  },
  button: {
    color: "white",
    borderColor: "white",
  },
});

const Footer = (props) => {
  const classes = useStyles();
  const { currentUser } = useContext(UserContext);

  return (
    <Grid container justify="center" alignItems="center" component="footer">
      <Grid
        item
        container
        direction="column"
        xs={2}
        className="footer-content"
        justify="center"
        alignItems="center"
      >
        <Typography variant="subtitle1">Navigation</Typography>
        <Divider className={classes.divider} />
        <Typography variant="caption" component={Link} to="#">
          Home
        </Typography>
        <Typography variant="caption" component={Link} to="#">
          Create
        </Typography>
        {currentUser ? (
          <Button
            className={classes.button}
            variant="outlined"
            onClick={props.handleLogout}
            startIcon={<AccountCircle />}
          >
            Logout
          </Button>
        ) : (
          <>
            <Typography variant="caption" component={Link} to="#">
              Sign In
            </Typography>
            <Typography variant="caption" component={Link} to="#">
              Sign Up
            </Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default Footer;
