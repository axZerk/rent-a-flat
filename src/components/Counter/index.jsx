import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    value: 0,
    a: 1,
    b: 2
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.state.value}</h2>
        <button onClick={this.handleIncrement}>Increment!</button>
        <button onClick={this.handleDecrement}>Decrement!</button>
      </div>
    );
  }
}
