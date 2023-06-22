import { loadFeature, defineFeature } from "jest-cucumber";
import { mount, shallow } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;

    given("the user has not specified a number of events to view", () => {
      AppWrapper = mount(<App />);
    });

    then("the default number of displayed events is 32", () => {
      AppWrapper.update();
      expect(AppWrapper.state("numberOfEvents")).toBe(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    let NumberOfEventsWrapper;

    given("the user wants to specify a number of events to view", () => {
      AppWrapper = mount(<App />);
      NumberOfEventsWrapper = shallow(
        <NumberOfEvents updateNumberOfEvents={() => {}} />
      );
    });

    when("the user changes the number of events to view", () => {
      const eventObject = { target: { value: 10 } };
      NumberOfEventsWrapper.find(".number-input").simulate(
        "change",
        eventObject
      );
    });

    then("the specified number of events is displayed", () => {
      expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(10);
    });
  });
});
