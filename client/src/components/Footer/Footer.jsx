import { Divider, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const useStyles = makeStyles({
  divider: {
    backgroundColor: "#eceef7",
    marginBottom: ".05em",
    width: "5em",
  },
});

const Footer = () => {
  const classes = useStyles();

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
        <Typography variant="caption" component={Link} to="#">
          Sign In
        </Typography>
        <Typography variant="caption" component={Link} to="#">
          Sign Up
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
