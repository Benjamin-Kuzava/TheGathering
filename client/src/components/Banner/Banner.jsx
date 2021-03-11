import { makeStyles, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import Background from "../../assets/urza.jpg";
import "./Banner.css";

const useStyles = makeStyles(() => ({
  title: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Overlock SC",
    textAlign: "center",
  },
  caption: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  smallTitle: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Overlock SC",
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  smallCaption: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1rem",
  },
}));

const Banner = (props) => {
  const classes = useStyles();
  const { isDetail } = props;
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <header
      className="banner"
      style={{
        backgroundImage: isDetail
          ? `url(${Background})`
          : `url(${props.article?.img_url})`,
      }}
    >
      <Typography
        variant="h2"
        className={isSmallScreen ? classes.smallTitle : classes.title}
      >
        {isDetail ? "The Gathering" : ""}
      </Typography>
      <Typography
        variant="h4"
        className={isSmallScreen ? classes.smallCaption : classes.caption}
      >
        {isDetail ? "MTG Articles from Standard to Pauper" : ""}
      </Typography>
    </header>
  );
};

export default Banner;
