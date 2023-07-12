// src/NumberOfEvents.js

import React, { Component } from "react";
import PropTypes from "prop-types";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0) {
      this.props.updateErrorAlert("Please enter a valid number");
    } else {
      this.props.updateNumberOfEvents(value);
      this.setState({ numberOfEvents: value }, () => {
        console.log("State updated:", this.state.numberOfEvents);
      });
      this.props.updateErrorAlert(""); // reset error message if valid number entered
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of Events: </label>
        <input
          id="numberOfEvents"
          type="text"
          className="number-input"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

NumberOfEvents.propTypes = {
  numberOfEvents: PropTypes.number.isRequired,
  updateNumberOfEvents: PropTypes.func.isRequired,
  updateErrorAlert: PropTypes.func.isRequired,
};

export default NumberOfEvents;
