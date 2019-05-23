import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
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

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    // map must be provided function with a return value.
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  // Deleting a counter from the state should be done here.
  handleDelete = counterID => {
    const counters = this.state.counters.filter(c => c.id !== counterID);
    // param must be "counters", not "newCounters" for react to find it.
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        {/*counts number of counters > 0*/}
        {/*passing state down from App to NavBar */}
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
