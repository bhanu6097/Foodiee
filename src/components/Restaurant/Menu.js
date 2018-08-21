import React, { Component } from "react";
import { items } from "./ItemList";
import Counter from "./Counter";

class Menu extends Component {
  render() {
    return (
      <div>
        {Object.keys(items).map(key => (
          <div>
            <h5>{items[key].title}</h5>
            <Counter />
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
