import React, { Component } from "react";
import PropTypes from "prop-types";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value }); // Always update the state

    if (value === "") {
      this.props.updateErrorAlert("Please enter a number of events");
    } else if (isNaN(value) || value <= 0) {
      this.props.updateErrorAlert("Please enter a valid number");
    } else {
      this.props.updateNumberOfEvents(value);
      this.props.updateErrorAlert(""); // reset error message if valid number entered
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>
          <span className="label-text">Number of Events </span>
          <input
            id="numberOfEvents"
            type="text"
            className="number-input"
            value={this.state.numberOfEvents}
            onChange={this.handleInputChanged}
          />
        </label>
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
