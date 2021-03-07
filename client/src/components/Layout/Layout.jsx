import { Grid } from "@material-ui/core";
import React from "react";
// import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="App">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Nav handleLogout={props.handleLogout} />
        </Grid>
        {/* <Grid item xs={12}>
          <Banner />
        </Grid> */}
        {/* <Grid item xs={2} /> */}
        <Grid item xs={12}>
          {props.children}
        </Grid>
        {/* <Grid item xs={2} /> */}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
