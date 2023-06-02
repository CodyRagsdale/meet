// src/__tests__/Event.test.js

import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData[0]} />);
  });

  test("render basic event details", () => {
    expect(EventWrapper.find(".event-summary")).toHaveLength(1);
    expect(EventWrapper.find(".details-btn")).toHaveLength(1);
  });

  test("render expanded event details when details button is clicked", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(1);
    expect(EventWrapper.find(".event-location")).toHaveLength(1);
    expect(EventWrapper.find(".event-date")).toHaveLength(1);
    expect(EventWrapper.find(".event-description")).toHaveLength(1);
  });

  test("hide event details when details button is clicked again", () => {
    EventWrapper.find(".details-btn").simulate("click");
    expect(EventWrapper.find(".event-details")).toHaveLength(0);
  });
});
