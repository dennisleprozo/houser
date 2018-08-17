import React, { Component } from "react";
import House from "../House/House";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios
      .get("/api//houses") //gets endpoint
      .then(response => {
        this.setState({
          houses: response.data //list
        });
        console.log(response.data);
      })
      .catch(err => console.log(err));
  }

  deleteHouse(id) {
    axios.delete("/api/houses/delete/${id}");
    this.getAllHouses();
  }

  getAllHouses() {
    axios
      .get("/api/houses")
      .then(response => {
        this.setState({
          houses: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let mappedHouses = () => {
      return this.state.houses.map(house => {
        const {
          id,
          name,
          address,
          city,
          state,
          zip,
          img,
          mortgage,
          rent
        } = house; //destructured

        return (
          <div key={id}>
            <House
              id={id}
              name={name}
              address={address}
              city={city}
              state={state}
              zip={zip}
              // image={image}
              mortgage={mortgage}
              rent={rent}
              deleteHouse={this.deleteHouse}
            />
          </div>
        );
      });
    };
    return (
      <div>
        <h2>Dashboard goes here </h2>
        <Link to="/wizard">
          <button> Add New Property </button>
        </Link>
        <House />
        {mappedHouses}
      </div>
    );
  }
}
