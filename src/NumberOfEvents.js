// src/NumberOfEvents.js

import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateNumberOfEvents(value);
    this.setState({ numberOfEvents: value });
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
