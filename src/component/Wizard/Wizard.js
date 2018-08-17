import React, { Component } from "react";

export default class Wizard extends Component {
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

  handleChange(name) {
    this.setState({ nuname: name });
  }

  render() {
    return (
      <div>
        <h2>Add New Listing</h2>
        <h3>Property Name</h3>
        <input
          onChange={e => this.handleChange(e.target.value)}
          type="text"
          placeholder="Property Name"
        />
        <h3>Address</h3>
        <input
          onChange={e => this.handleChange(e.target.value)}
          type="text"
          placeholder="Address"
        />
        <h3>City State Zip</h3>
        <input
          onChange={e => this.handleChange(e.target.value)}
          type="text"
          placeholder="City"
        />
        <input
          onChange={e => this.handleChange(e.target.value)}
          type="text"
          placeholder="State"
        />
        <input
          onChange={e => this.handleChange(e.target.value)}
          type="number"
          placeholder="Zipcode"
        />
      </div>
    );
  }
}
