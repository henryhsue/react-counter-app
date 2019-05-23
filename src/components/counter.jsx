import React, { Component } from "react";

class Counter extends Component {
  // if you don't use classes, but you should.
  // just for edification.
  styles = {
    fontSize: 14,
    fontWeight: "bold"
  };

  // Bind event handlers.
  // Don't need this if we use arrow function
  // constructor() {
  //  super();
  //  this.handleIncrement = this.handleIncrement.bind(this);
  //}

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  // utility function
  formatCount() {
    // pick count property within state using object destructuring
    // rather than do this.state.count
    const { value } = this.props.counter;
    // === is equal comparison
    return value === 0 ? "Zero" : value;
    // "Zero" or JSX like <h1>Zero</h1>
  }

  // define render function for react component
  render() {
    // Just a button for now for Increment
    // this.formatCount() is an expression like 1+1
    // {} requires an expression within
    // classNames are bootstrap styling with badge and btn.
    return (
      <div>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          {/* note that onClick below is no longer passing a reference to handleIncrement, 
            it is passing a reference to a created arrow function that calls handleIncrement. 
            That safely ensures that this will refer to the object of the method. 
            Arrow functions bind to the object of the class. 
          */}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
          {/*access another components' prop, the onDelete, since
          state is located within Counters, onDelete must be implemented
          there to modify it locally.*/}
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
