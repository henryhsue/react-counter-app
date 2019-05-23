import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {/* call each item counter singular*/}
        {/* here we define props: key, value, etc...*/}
        {/* we need "key" to keep react happy, but we can use id only*/}
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onReset={onReset}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
