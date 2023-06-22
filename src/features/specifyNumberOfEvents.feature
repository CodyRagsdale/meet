Feature: Specify number of events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user has not specified a number of events to view
    Then the default number of displayed events is 32

  Scenario: User can change the number of events they want to see
    Given the user wants to specify a number of events to view
    When the user changes the number of events to view
    Then the specified number of events is displayed