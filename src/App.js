//App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
  };

  componentDidMount() {
    this.mounted = true;
    this.updateEvents();

    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({
          events: events.slice(0, this.state.numberOfEvents),
          locations: extractLocations(events),
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateNumberOfEvents = (number) => {
    this.setState({ numberOfEvents: number }, this.updateEvents);
  };

  updateEvents = (city, eventCount) => {
    if (city) {
      getEvents().then((events) => {
        const locationEvents = events.filter(
          (event) => event.location === city
        );

        const count = eventCount || this.state.numberOfEvents;

        if (this.mounted) {
          this.setState({
            events: locationEvents.slice(0, count),
            numberOfEvents: count,
          });
        }
      });
    } else {
      getEvents().then((events) => {
        const count = eventCount || this.state.numberOfEvents;
        if (this.mounted) {
          this.setState({
            events: events.slice(0, count),
            numberOfEvents: count,
          });
        }
      });
    }
  };

  render() {
    return (
      <div className="App">
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <div>
          <EventList events={this.state.events} />

          <NumberOfEvents
            numberOfEvents={this.state.numberOfEvents}
            updateNumberOfEvents={this.updateNumberOfEvents}
          />
        </div>
      </div>
    );
  }
}

export default App;
