import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      itemCount: 0
    };
    this.increement = this.increement.bind(this);
  }
  increement = () => {
    this.setState = { itemCount: this.state.itemCount + 1 };
  };
  render() {
    return (
      <div>
        <button onClick="Decreement">-</button>
        {this.state.itemCount}
        <button onClick="increement">+</button>
      </div>
    );
  }
}

export default Counter;
