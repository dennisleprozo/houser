import React, { Component } from "react";
import "./App.css";
import Dashboard from '../src/component/Dashboard/Dashboard'
import Wizard from './component/Wizard/Wizard'
import route from "./route";
import Header from "./component/Header/Header";

export default class App extends Component {
  render() {
    return (                  //renders the Header.js
      <div>
        <Header />        
        {route}
      </div>
    );
  }
}

