import { Grid } from "@material-ui/core";
import React from "react";
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
        <Grid item xs={12}>
          {props.children}
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
