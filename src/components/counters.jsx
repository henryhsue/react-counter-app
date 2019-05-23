import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { ids: 1, value: 2, name: "first" },
      { ids: 2, value: 0, name: "second" },
      { ids: 3, value: 0, name: "third" },
      { ids: 4, value: 0, name: "fourth" }
    ]
  };
  render() {
    return (
      <div>
        {/* call each item counter singular*/}
        {this.state.counters.map(counter => (
          <Counter key={counter.ids} value={counter.value} name={counter.name}>
            <h4>Title</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
