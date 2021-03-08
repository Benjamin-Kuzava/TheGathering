import { Grid } from "@material-ui/core";
import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Banner from "../../components/Banner/Banner";
import "./Home.css";

const Home = (props) => {
  const { articles } = props;

  return (
    <Grid container spacing={4} justify="center">
      <Grid item xs={12}>
        <Banner isHome />
      </Grid>
      <Grid item container spacing={4} xs={8}>
        {articles.map((article) => (
          <Grid key={article.id} item xs={3}>
            <ArticleCard key={article.id} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
