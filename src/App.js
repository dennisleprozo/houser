import React, { Component } from "react";
import "./App.css";
import logo from "./logo.svg";
//import Dashboard from './component/DashBoard/Dashboard'
// import Wizard from './component/Wizard/Wizard'
import route from "./route";
import Header from "./component/Header/Header";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {route}
      </div>
    );
  }
}

