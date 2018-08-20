import React, { Component } from "react";
import Header from "../src/components/Header/Header";
import { Route, Switch } from "react-router-dom";
import RestaurantList from "../src/components/Restaurant/RestaurantList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      heading: "Foodiee"
    };
  }
  render() {
    return (
      <div>
        <Header name={this.state.heading} />
        <Switch>
          <Route path="/HydrabadChefs" component={Header} />
          <Route path="/kritunga" component={Header} />
          <Route component={RestaurantList} />
        </Switch>
      </div>
    );
  }
}
export default App;
