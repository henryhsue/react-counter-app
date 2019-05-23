import React, { Component } from "react";

class Counter extends Component {
  // state object has a count component
  state = {
    // fix the state before we increment it
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

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

  // updates the count and tells react to change state for count.
  // when this is called, react will update the dom at just the span
  // where the count is located.
  handleIncrement = product => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  // define render function for react component
  render() {
    // Just a button for now for Increment
    // this.formatCount() is an expression like 1+1
    // {} requires an expression within
    // classNames are bootstrap styling with badge and btn.
    // we display a list of tags with key tag so the dom can be updated
    // for each individual tag selectively when their state changes.
    // we also map each tag to a list object for display.
    return (
      <div>
        <div>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.handleIncrement({ productID })}
            className="btn btn-secondary btn-sm"
          >
            Increment
          </button>
        </div>
        <div>{this.state.tags.length === 0 && "Please create a new tag"}</div>
        <div>{this.renderTags()}</div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  // utility function
  formatCount() {
    // pick count property within state using object destructuring
    // rather than do this.state.count
    const { count } = this.state;
    // === is equal comparison
    return count === 0 ? "Zero" : count;
    // "Zero" or JSX like <h1>Zero</h1>
  }
}
export default Counter;
