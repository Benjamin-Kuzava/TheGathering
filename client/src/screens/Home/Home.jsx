import { Grid } from "@material-ui/core";
import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Banner from "../../components/Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Banner />
      </Grid>
    </Grid>
  );
};

export default Home;
