# Meet App
https://codyragsdale.github.io/meet/

## Project Overview
The Meet App is a progressive web application (PWA) built using React, serverless architecture, and test-driven development (TDD) techniques. It utilizes the Google Calendar API to fetch and display upcoming events in various cities.

The app is designed to work both online and offline, providing a seamless user experience regardless of internet connectivity. It also supports adding an app shortcut to the user's home screen for quick access.

The application is hosted on a cloud provider and can be used across a wide range of devices due to its responsive design.

By leveraging serverless architecture, the app benefits from reduced backend maintenance, easy scalability, high availability, and lower costs associated with idle time. The use of TDD ensures high-quality code and comprehensive test coverage, which ultimately distinguishes the Meet App from other web applications.

## Project Objective
The main goal of this project is to develop a PWA that combines the benefits of serverless architecture and PWAs, with the following features:

- Serverless: No backend maintenance, easy to scale, always available, no cost for idle time.
- PWAs: Instant loading, offline support, push notifications, "add to home screen" prompt, responsive design, and cross-platform compatibility.

## Features
- Filter events by city
- Show/hide event details
- Specify number of events
- Use the app when offline
- Add an app shortcut to the home screen
- View a chart showing the number of upcoming events by city

## User Stories and Scenarios

### User Story 1: Filter events by city
As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

#### Scenario 1.1: User selects a city


Given the user is viewing the event list
When the user selects a city from the city filter
Then the event list should update to display events taking place in the selected city

### User Story 2: Show/hide event details
As a user, I should be able to show/hide event details so that I can see more or less information about an event.

#### Scenario 2.1: An event element is collapsed by default


Given the user has not interacted with an event element
When the user views the event list
Then the event details should be collapsed by default

#### Scenario 2.2: User can expand an event to see its details


Given the user is viewing the event list
When the user clicks on an event element
Then the event details should expand and be visible

#### Scenario 2.3: User can collapse an event to hide its details


Given the user has expanded an event element to see its details
When the user clicks on the expanded event element
Then the event details should collapse and be hidden

### User Story 3: Specify number of events
As a user, I should be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

#### Scenario 3.1: When user hasn’t specified a number, 32 is the default number


Given the user has not specified a number of events to view
When the user views the event list
Then the application should display 32 events by default

#### Scenario 3.2: User can change the number of events they want to see


Given the user is viewing the event list
When the user changes the number of events to view
Then the application should update the event list to display the specified number of events

### User Story 4: Use the app when offline
As a user, I should be able to use the app when offline so that I can see the events I viewed the last time I was online.

#### Scenario 4.1: Show cached data when there’s no internet connection


Given the user has no internet connection
When the user opens the application
Then the application should display the cached event data from the last online session

#### Scenario 4.2: Show error when user changes the settings (city, time range)


Given the user has no internet connection
When the user attempts to change the city or time range settings
Then the application should display an error message indicating that changes cannot be made without an internet connection

### User Story 5: Add an app shortcut to the home screen
As a user, I should be able to add the app shortcut to my home screen so that I can open the app faster.

#### Scenario 5.1: User adds app shortcut to the home screen


Given the user is viewing the application in a compatible browser
When the user chooses to add the app to their home screen
Then the application should be added as a shortcut on the user's home screen

### User Story 6: View a chart showing the number of upcoming events by city
As a user, I should be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

#### Scenario 6.1: Show a chart with the number of upcoming events in each city

Given the user is viewing the application
When the user searches for a city
Then the application should display a chart showing the number of upcoming events in that city

