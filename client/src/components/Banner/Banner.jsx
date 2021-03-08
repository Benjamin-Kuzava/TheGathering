import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./Banner.css";

const useStyles = makeStyles(() => ({
  title: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Overlock SC",
  },
  caption: {
    color: "white",
    fontWeight: "bold",
  },
}));

const Banner = (props) => {
  const classes = useStyles();

  return (
    <header className="banner">
      <Typography variant="h2" className={classes.title}>
        The Gathering
      </Typography>
      <Typography variant="h4" className={classes.caption}>
        MTG Articles from Standard to Pauper
      </Typography>
    </header>
  );
};

export default Banner;
