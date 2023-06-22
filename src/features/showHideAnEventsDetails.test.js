import { loadFeature, defineFeature } from "jest-cucumber";
import { mount } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let EventWrapper;

  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("the user has not selected to view event details", () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    then("the event details should not be visible", () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("the user has not selected to view event details", () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
    });

    when('the user clicks on the "Show Details" button for an event', () => {
      EventWrapper.find(".details-btn").simulate("click");
    });

    then("the event details should be visible", () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(1);
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("the user has selected to view event details", () => {
      EventWrapper = mount(<Event event={mockData[0]} />);
      EventWrapper.find(".details-btn").simulate("click");
    });

    when('the user clicks on the "Hide Details" button for an event', () => {
      EventWrapper.find(".details-btn").simulate("click");
    });

    then("the event details should not be visible", () => {
      expect(EventWrapper.find(".event-details")).toHaveLength(0);
    });
  });
});
