import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

const useStyles = makeStyles({
  pageContainer: {
    minHeight: "100vh",
    display: "grid",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateColumns: "100%",
  },
});

const Layout = (props) => {
  const classes = useStyles();
  const { handleLogout, children } = props;

  return (
    <div className="App">
      <Grid container className={classes.pageContainer}>
        <Grid item xs={12}>
          <Nav handleLogout={handleLogout} />
        </Grid>
        <Grid item xs={12}>
          {children}
        </Grid>
        <Grid item xs={12}>
          <Footer handleLogout={handleLogout} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
