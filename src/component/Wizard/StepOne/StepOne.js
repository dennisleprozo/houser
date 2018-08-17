import React, { Component } from "react";
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

export default class StepOne extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: 0
    };
  }

  handleName(val) {
    this.setState({name:val });
  }

  handleAddress(val) {
    this.setState({address:val });
  }

  handleCity(val) {
    this.setState({city:val });
  }

  handlestate(val) {
    this.setState({state:val });
  }

  handlezip(val) {
    this.setState({zip:val });
  }


  render() {
    return (
      <div>
        <h2>Add New Listing</h2>
        <h3>Property Name</h3>

        <input
            value={this.state.name} type ='text'
            onChange={ e => this.handleName(e.target.value)}
        />

        





      </div>
    );
  }
}
