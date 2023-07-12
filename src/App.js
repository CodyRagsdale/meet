//App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import { InfoAlert, ErrorAlert } from "./components/Alert";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: props.events || [],
      locations: props.locations || [],
      numberOfEvents: 32,
      selectedLocation: "all",
      infoAlert: "",
      errorAlert: "",
    };
  }

  componentDidMount() {
    this.mounted = true;
    if (this.state.events.length === 0) this.updateEvents();
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (number) => {
    this.setState({ numberOfEvents: number }, () => {
      this.updateEvents();
    });
  };

  updateEvents = (
    location = this.state.selectedLocation,
    eventCount = this.state.numberOfEvents
  ) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      const eventsToShow = locationEvents.slice(0, eventCount);

      if (this.mounted) {
        this.setState({
          events: eventsToShow,
          locations: extractLocations(events),
          selectedLocation: location,
          numberOfEvents: eventCount,
        });
      }
    });
  };

  updateInfoAlert = (alertText) => {
    this.setState({ infoAlert: alertText });
  };

  updateErrorAlert = (alertText) => {
    this.setState({ errorAlert: alertText });
  };

  render() {
    return (
      <div className="App">
        <div className="alerts-container">
          {this.state.infoAlert.length ? (
            <InfoAlert text={this.state.infoAlert} />
          ) : null}
          {this.state.errorAlert.length ? (
            <ErrorAlert text={this.state.errorAlert} />
          ) : null}
        </div>
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
          updateInfoAlert={this.updateInfoAlert}
        />
        <div className="EventContainer">
          <EventList events={this.state.events} />

          <NumberOfEvents
            numberOfEvents={this.state.numberOfEvents}
            updateNumberOfEvents={this.updateNumberOfEvents}
            updateErrorAlert={this.updateErrorAlert}
          />
        </div>
      </div>
    );
  }
}

export default App;
