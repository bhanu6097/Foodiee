import React, { Component } from "react";
import Counter from "./Counter";
import { restaurants } from "./Restaurants";

class Menu extends Component {
  render() {
    return (
      <div>
        {Object.keys(restaurants).map(key => (
          <div>
            {restaurants[key].items.map((e, i) => {
              return (
                <div>
                  <h4>{e.title}</h4>
                  <h4>{e.price}</h4>
                </div>
              );
            })}
            <Counter />
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
