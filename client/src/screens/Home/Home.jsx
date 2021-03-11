import { Grid, makeStyles, Paper } from "@material-ui/core";
import React from "react";
import Banner from "../../components/Banner/Banner";
import "./Home.css";
import TabBar from "../../components/TabBar/TabBar";

const useStyles = makeStyles(() => ({
  main: {
    marginTop: "-5em",
  },
  mainContainer: {
    paddingBottom: "15rem",
  },
}));

const Home = (props) => {
  const { articles, categories } = props;
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
        <TabBar
          component={Grid}
          item
          xs={12}
          articles={articles}
          categories={categories}
        />
      </Grid>
    </Grid>
  );
};

export default Home;
