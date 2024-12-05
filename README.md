The Meet APP

The app is going to be able to filter events by city, show/ hide event detail, display a chart visulixing event detail, spezify number of events, be used offline and have a shortcut to the hone screen

Your Project Deliverables
Throughout this course, you’ll work from Exercise to Exercise to complete your project. For each task,
you’ll submit a deliverable that contributes to the final product—in this case, an app demonstrating
your knowledge and skills of PWAs. Here’s a breakdown of your project deliverables by Exercise:

Exercise 4.1: TDD & Test Scenarios
● Write user stories based on the app’s key features.
● Translate user stories for each feature into multiple test scenarios.
● Use create-react-app to create a React app and push it to GitHub.
● Deploy a React app to GitHub Pages.

Exercise 4.2: Intro to Serverless Functions & Authentication
● Evaluate the merit and usefulness of serverless development
● Connect a React app with a protected API
● Prepare an OAuth client for authorization and authentication
● Obtain AWS credentials for future use

Exercise 4.3: Writing & Testing AWS Lambda Functions
● Write Lambda functions to implement serverless technology in an app
● Test Lambda functions
● Create a serverless deployment package

Exercise 4.4: Unit Testing
● Analyze use cases for unit tests
● Write unit tests for an app
● Test components using mock data
● Develop implementation code in response to unit tests

Exercise 4.5: Integration Testing
● Analyze use cases for integration tests
● Write integration tests
● Develop implementation code in response to integration tests
● Integrate real data from an API into a web app

Exercise 4.6: User Acceptance Testing & End-to-End Testing
● Describe the purpose of end-to-end testing during development
● Write acceptance tests for an app to help non-developer stakeholders understand
implementation code
● Conduct automated end-to-end testing for an app
● Handle testing errors in the terminal

Exercise 4.7: Continuous Delivery
● Discuss how CI and CD practices can help developers and organizations deliver
high-quality products
● Integrate an APM tool into the development of a web app

Exercise 4.8: Object-Oriented Programming (OOP)
● Define core concepts related to the OOP paradigm.
● Differentiate between when to use functional programming (FP) and when to use OOP to
solve architectural problems (and when to use both).
● Implement a feature in your web app using OOP and React class components.

Exercise 4.9: Progressive Web Apps
● Discuss what progressive web apps (PWAs) are and how they compare to regular web apps
and native apps.
● Explain the core functionality of PWAs.
● Implement progressive functionality into an existing app, so that the app can be used offline
and added to a user’s home screen.

USER STORIES

Feature 1: Filter Events By City
As a user,
I should be able to search for a city
so that I can find upcoming events in that specific location.

As a user,
I should see a list of suggestions when I search for a city
so that I can easily select the correct city without typing the full name.

As a user,
I should be able to select a city from the suggested list
so that I can quickly filter events by the chosen city.

Feature 2: Show/Hide Event Details
As a user,
I should see event elements collapsed by default
so that I can have a cleaner view of the event list.

As a user,
I should be able to expand an event to see details
so that I can quickly access more information about the event.

As a user,
I should be able to collapse an event to hide details
so that I can manage the amount of information displayed on the screen.

Feature 3: Specify Number of Events
As a user,
I should see 32 events displayed by default when I haven't specified a number
So that I can easily view a standard amount of events without additional configuration.

As a user,
I should be able to change the number of events displayed
so that I can customize my view according to my preferences.

Feature 4: Use the App When Offline
As a user,
I should see cached data when there's no internet connection
so that I can still access important information about events.

As a user,
I should receive an error message when I change search settings while offline
So that I am informed that my actions require an internet connection.

Feature 5: Add an App Shortcut to the Home Screen
As a user,
I should be able to install the meet app as a shortcut on my device home screen
so that I can quickly access the app without navigating through menus.

Feature 6: Display Charts Visualizing Event Details
As a user,
I should see a chart with the number of upcoming events in each city
so that I can easily visualize and compare event availability across different locations.

GHERKIN SCENARIOS

Feature 1: Filter Events By City
Scenario: When user hasn’t searched for a city, show upcoming events from all cities
  Given the user has not searched for a city
  When the user views the event list
  Then upcoming events from all cities should be displayed

Scenario: User should see a list of suggestions when they search for a city
  Given the user is on the event search page
  When the user starts typing in the city search box
  Then a list of city suggestions should be displayed

Scenario: User can select a city from the suggested list
  Given the user sees a list of city suggestions
  When the user selects a city from the suggestions
  Then the event list should update to show events from the selected city

Feature 2: Show/Hide Event Details
Scenario: An event element is collapsed by default
  Given the event list is displayed
  When the user views an event
  Then the event details should be collapsed by default

Scenario: User can expand an event to see details
  Given the event list is displayed
  And an event is collapsed
  When the user clicks to expand the event
  Then the event details should be visible

Scenario: User can collapse an event to hide details
  Given the event list is displayed
  And an event is expanded
  When the user clicks to collapse the event
  Then the event details should be hidden

Feature 3: Specify Number of Events
Scenario: When user hasn’t specified a number, 32 events are shown by default
  Given the user has not specified a number of events
  When the event list is loaded
  Then 32 events should be displayed by default

Scenario: User can change the number of events displayed
  Given the user is on the event list page
  When the user specifies a number of events to display
  Then the event list should update to show the specified number of events

Feature 4: Use the App When Offline
Scenario: Show cached data when there’s no internet connection
  Given the app is offline
  When the user opens the app
  Then the cached data should be displayed

Scenario: Show error when user changes search settings (city, number of events)
  Given the app is offline
  When the user changes search settings for city or number of events
  Then an error message should be displayed

Feature 5: Add an App Shortcut to the Home Screen
Scenario: User can install the meet app as a shortcut on their device home screen
  Given the user is on the app page
  When the user selects the option to add a shortcut to the home screen
  Then the meet app shortcut should be added to the device home screen

Feature 6: Display Charts Visualizing Event Details
Scenario: Show a chart with the number of upcoming events in each city
  Given the user is on the event details page
  When the user views the event chart
  Then a chart should be displayed showing the number of upcoming events in each city
