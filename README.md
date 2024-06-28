# CMP Tech Test

This repository is a frontend technical test to asses your skill at building user interfaces with a good user experience. It is also designed to challenge your knowledge of the web and data privacy regulations such as GDPR.

## Build & Run

How to build and run the local server:

- Install Node.js
- In the command line run `npx -y http-server`
- index.html will be served on [localhost:8080](http://localhost:8080)

## Task 1

Build a cookie banner with a new design, paying particular attention to the user experience and GDPR regulations.

Your cookie banner will be assessed on:

- Its design for an appealing UI and a friendly UX
- Compliance with GDPR requirements of cookie banners

## Task 2a

Use the JavaScript `MutationObserver` Web API to block the advertising cookie script but not the essential cookie script in the `/cookie-scripts` folder from placing their cookies on the page. This is known as opt-in consent.

- Write your code in the `cookie-blocking-script.js`
- When the cookie banner has consent accepted for all cookies, the advertising cookie should then be placed on the page.

## Task 2b

Add an option to the `cookie-blocking-script.js` for opt-out consent where all cookies are allowed by default but can be removed from the page if consent is denied from the cookie banner.

Your code needs to be flexible to handle both the opt-in and opt-out scenarios with minimal configuration.

Your script will be assessed on:

- Its functional ability to block scripts from placing cookies
- Code quality for structure, readability and extensibility

## Submission Guidelines

- Allocate 1-2 hours for this task
- The use of frontend JavaScript frameworks is prohibited and your solution must be written solely in vanilla JavaScript
- The use of AI is not prohibited but if the entire solution is found to be largely written by AI then it will be discredited - use AI sparingly and not as the foundation of your solution.
- Submit your solution as a public repository with an explanation of your code in the README.md implementation section below
- Email the repository link to [james@secureprivacy](mailto:james@secureprivacy.ai) and [dan@secureprivacy](mailto:dan@secureprivacy.ai)

## Implementation

ToDo: Add your code explanation here
