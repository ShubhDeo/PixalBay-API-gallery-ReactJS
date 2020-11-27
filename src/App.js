import React, { Component } from "react";
import Navbar from "./components/navbar/Navbar";
import "./styles.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Search from "./components/search/Search";

export default function App() {
  return (
    <MuiThemeProvider>
      <div>
        <Navbar />
        <Search />
      </div>
    </MuiThemeProvider>
  );
}
