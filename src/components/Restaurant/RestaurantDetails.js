import React, { Component } from "react";
import "./restaurant.css";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import { Route, Switch } from "react-router-dom";
import { restaurants } from "./Restaurants";
import { connect } from "react-redux";
import { selectedRestaurant } from "../Actions/selectAction";

class RestaurantDetails extends Component {
  constructor() {
    super();
    this.state = {
      Restaurants: restaurants,
      RestaurantInfo: "Intial"
    };
    this.selectedt = this.selected.bind(this);
  }
  selected = Restuarant => {
    console.log("Clicked");
    //this.props.dispatch(selectedRestaurant(Restuarant));
    console.log(
      "I am printing in the selectedRestuarant:: " + this.state.RestaurantInfo
    );
  };
  render() {
    return (
      <div className="container2">
        <Link to="Menu">
          {Object.keys(this.state.Restaurants).map(key => (
            <div>
              <img
                src={this.state.Restaurants[key].poster}
                className="iconDetails"
                onClick={this.selected(this.state.Restaurants[key].title)}
              />
              <h3>{this.state.Restaurants[key].title}</h3>
            </div>
          ))}
        </Link>
      </div>
    );
  }
}
const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps)(RestaurantDetails);
