// src/__tests__/NumberOfEvents.test.js

import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(
      <NumberOfEvents
        numberOfEvents={32}
        updateErrorAlert={() => {}}
        updateNumberOfEvents={() => {}}
        updateEvents={() => {}}
      />
    );
  });

  test("render number input", () => {
    expect(NumberOfEventsWrapper.find(".number-input")).toHaveLength(1);
  });

  test("user sees 32 events by default", () => {
    expect(NumberOfEventsWrapper.find(".number-input").prop("type")).toBe(
      "text"
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("renders text input correctly", () => {
    const numberOfEvents = NumberOfEventsWrapper.state("numberOfEvents");
    expect(NumberOfEventsWrapper.find(".number-input").prop("value")).toBe(
      numberOfEvents
    );
  });

  test("change state when number input changes", () => {
    const eventObject = { target: { value: 20 } };
    NumberOfEventsWrapper.find(".number-input").simulate("change", eventObject);
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(20);
  });
});
