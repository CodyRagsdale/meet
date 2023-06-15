// src/NumberOfEvents.js

import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    console.log("Input value:", value); // Check the input value
    this.props.updateNumberOfEvents(value);
    this.setState({ numberOfEvents: value }, () => {
      console.log("State updated:", this.state.numberOfEvents); // Check the state after updating
    });
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of Events: </label>
        <input
          id="numberOfEvents"
          type="number"
          className="number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
