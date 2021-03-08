import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "./Banner.css";
import Background from "../../assets/urza.jpg";

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
  const { isHome } = props;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: isHome
          ? `url(${Background})`
          : `url(${props.article?.img_url})`,
      }}
    >
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
