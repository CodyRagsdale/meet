// src/Event.js

import React, { Component } from "react";

class Event extends Component {
  state = {
    showDetails: false,
  };

  handleDetailsButton = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { event } = this.props;
    const { showDetails } = this.state;

    return (
      <div className="event">
        <h1 className="event-summary">{event.summary}</h1>
        {showDetails && (
          <div className="event-details">
            <p className="event-location">{event.location}</p>
            <p className="event-date">{event.start.dateTime}</p>
            <p className="event-description">{event.description}</p>
          </div>
        )}
        <button className="details-btn" onClick={this.handleDetailsButton}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  }
}

export default Event;
