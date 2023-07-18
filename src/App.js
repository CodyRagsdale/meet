//App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";
import { InfoAlert, ErrorAlert, WarningAlert } from "./components/Alert";

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
      warningAlert: "",
    };
  }

  componentDidMount() {
    this.mounted = true;
    if (navigator.onLine) {
      // Check if the user is online
      this.updateEvents();
    } else {
      // If offline, load events from local storage
      const events = localStorage.getItem("lastEvents");
      if (events) {
        this.setState({
          events: JSON.parse(events),
          locations: extractLocations(JSON.parse(events)),
        });
      }
    }
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
    if (!navigator.onLine) {
      const events = localStorage.getItem("lastEvents");
      if (events) {
        this.setState({
          events: JSON.parse(events).slice(0, eventCount),
          locations: extractLocations(JSON.parse(events)),
          warningAlert:
            "Warning: You are currently offline. Events are loaded from the cache.",
        });
      }
    } else {
      console.log("updateEvents called");
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
            warningAlert: "",
          });
        }
      });
    }
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
          {this.state.warningAlert.length ? (
            <WarningAlert text={this.state.warningAlert} />
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
