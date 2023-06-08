// src/__tests__/NumberOfEvents.test.js

import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("render number input", () => {
    expect(NumberOfEventsWrapper.find(".number-input")).toHaveLength(1);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-input").prop("value")).toBe(
      numberOfEvents
    );
  });

  test("change state when number input changes", () => {
    NumberOfEventsWrapper.setState({
      numberOfEvents: "10",
    });
    const eventObject = { target: { value: "20" } };
    NumberOfEventsWrapper.find(".number-input").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe("20");
  });
});