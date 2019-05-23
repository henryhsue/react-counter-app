import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // this state should only be modified by Counters, not Counter.
  // component that owns a state should modify it.
  state = {
    counters: [
      { id: 1, value: 2, name: "first" },
      { id: 2, value: 0, name: "second" },
      { id: 3, value: 0, name: "third" },
      { id: 4, value: 0, name: "fourth" }
    ]
  };

  // Deleting a counter from the state should be done here.
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    // param must be "counters", not "newCounters" for react to find it.
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {/* call each item counter singular*/}
        {/* here we define props: key, value, etc...*/}
        {/* we need "key" to keep react happy, but we can use id only*/}
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
