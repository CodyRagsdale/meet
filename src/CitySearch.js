import React, { Component } from "react";
import "./CitySearch.css";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) =>
      location.toUpperCase().includes(value.toUpperCase())
    );

    let infoText;
    if (suggestions.length === 0) {
      infoText =
        "We can not find the city you are looking for. Please try another city";
    } else {
      infoText = "";
    }
    this.props.updateInfoAlert(infoText);

    return this.setState({
      query: value,
      suggestions,
    });
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      showSuggestions: false,
    });

    this.props.updateEvents(suggestion);
    this.props.updateInfoAlert("");
  };

  render() {
    return (
      <div className="CitySearch">
        <div className="searchField">
          <label className="inputField">
            <span className="label-text">City Search</span>
            <input
              type="text"
              className="city"
              value={this.state.query}
              onChange={this.handleInputChanged}
              onFocus={() => {
                this.setState({ showSuggestions: true });
              }}
            />
          </label>
          <ul
            className="suggestions"
            style={this.state.showSuggestions ? {} : { display: "none" }}
          >
            {this.state.suggestions.map((suggestion) => (
              <li
                key={suggestion}
                onClick={() => this.handleItemClicked(suggestion)}
              >
                {suggestion}
              </li>
            ))}
            <li
              className="see-all"
              onClick={() => this.handleItemClicked("all")}
            >
              <b>See all cities</b>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CitySearch;
