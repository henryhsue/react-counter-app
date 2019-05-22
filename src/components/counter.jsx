import React, { Component } from "react";

class Counter extends Component {
  // state object has a count component
  state = {
    // fix the state before we increment it
    count: 0
  };

  // utility function
  formatCount() {
    // pick count property within state using object destructuring
    // rather than do this.state.count
    const { count } = this.state;
    // === is equal comparison
    return count === 0 ? "Zero" : count;
    // "Zero" or JSX like <h1>Zero</h1>
  }

  // render function for react component
  render() {
    // Just a button for now for Increment
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
