import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import Banner from "../../components/Banner/Banner";
import "./Home.css";

const useStyles = makeStyles(() => ({
  main: {
    marginTop: "-5em",
  },
  mainContainer: {
    paddingBottom: "15rem",
  },
}));

const Home = (props) => {
  const { articles } = props;
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      justify="center"
      className={classes.mainContainer}
    >
      <Grid item xs={12}>
        <Banner isDetail />
      </Grid>
      <Grid
        item
        container
        spacing={4}
        xs={12}
        md={10}
        lg={8}
        component={Paper}
        elevation={3}
        className={classes.main}
      >
        {articles.map((article) => (
          <Grid key={article.id} item xs={12} sm={6} md={5} lg={4} xl={3}>
            <ArticleCard key={article.id} article={article} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Home;
