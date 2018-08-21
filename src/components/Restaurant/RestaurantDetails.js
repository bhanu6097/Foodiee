import React, { Component } from "react";
import "./restaurant.css";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";
import { restaurants } from "./Restaurants";

class RestaurantDetails extends Component {
  constructor() {
    super();
    this.state = {
      Restaurants: restaurants
    };
  }
  render() {
    return (
      <div className="container2">
        <Link to="Menu">
          {Object.keys(this.state.Restaurants).map(key => (
            <div>
              <img
                src={this.state.Restaurants[key].poster}
                className="iconDetails"
              />
              <h3>{this.state.Restaurants[key].title}</h3>
            </div>
          ))}
        </Link>
      </div>
    );
  }
}
export default RestaurantDetails;
