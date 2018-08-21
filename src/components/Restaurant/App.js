import React, { Component } from "react";
import Header from "../Header/Header";
import { restaurants } from "./Restaurants";
import RestaurantDetails from "./RestaurantDetails";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
class App extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Foodiee",
      Restaurants: restaurants
    };
  }

  render() {
    return (
      <div>
        <Header name={this.state.heading} />
        <Switch>
          <Route path="/Menu" component={Menu} />
          <Route component={RestaurantDetails} />
        </Switch>
      </div>
    );
  }
}
export default App;
