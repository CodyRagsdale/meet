import React, { Component } from "react";
import "./Event.css";

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

    const eventDate = new Date(event.start.dateTime);
    const readableDate = eventDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    });

    return (
      <div className="event">
        <div className="event-content">
          {" "}
          {/* Introduced wrapper div */}
          <h1 className="event-summary">{event.summary}</h1>
          {showDetails && (
            <div className="event-details">
              <p className="event-location">{event.location}</p>
              <p className="event-date">{readableDate}</p>
              <p className="event-description">{event.description}</p>
            </div>
          )}
        </div>
        <button className="details-btn" onClick={this.handleDetailsButton}>
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    );
  }
}

export default Event;
