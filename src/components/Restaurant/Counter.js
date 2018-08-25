import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }
  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  decrementCount = () => {
    if (this.state.count !== 0) {
      this.setState({
        count: this.state.count - 1
      });
    } else {
      this.setState({
        count: 0
      });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.decrementCount}>-</button>
      </div>
    );
  }
}

export default Counter;
