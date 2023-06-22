Feature: Show/Hide an event's details

  Scenario: An event element is collapsed by default
    Given the user has not selected to view event details
    Then the event details should not be visible

  Scenario: User can expand an event to see its details
    Given the user has not selected to view event details
    When the user clicks on the "Show Details" button for an event
    Then the event details should be visible

  Scenario: User can collapse an event to hide its details
    Given the user has selected to view event details
    When the user clicks on the "Hide Details" button for an event
    Then the event details should not be visible