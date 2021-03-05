import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="App">
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
