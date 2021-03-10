import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Background from "../../assets/urza.jpg";
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
  const { isDetail } = props;

  return (
    <header
      className="banner"
      style={{
        backgroundImage: isDetail
          ? `url(${Background})`
          : `url(${props.article?.img_url})`,
      }}
    >
      <Typography variant="h2" className={classes.title}>
        {isDetail ? "The Gathering" : ""}
      </Typography>
      <Typography variant="h4" className={classes.caption}>
        {isDetail ? "MTG Articles from Standard to Pauper" : ""}
      </Typography>
    </header>
  );
};

export default Banner;
