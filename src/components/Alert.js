// src/components/Alert.js

import { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.backgroundColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      borderWidth: "2px",
      borderStyle: "solid",
      fontWeight: "bolder",
      borderRadius: "7px",
      borderColor: this.color,
      textAlign: "center",
      fontSize: "12px",
      margin: "10px 0",
      padding: "10px",
    };
  };

  render() {
    return (
      <div className="Alert" style={this.getStyle()}>
        {this.props.text}
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
    this.backgroundColor = "lightblue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
    this.backgroundColor = "pink";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "orange";
    this.backgroundColor = "lightyellow";
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };
