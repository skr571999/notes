# Code Testing

- Automated Test - Code Testing Code

## Types of Tests

- Fully Isolated(testing function) - Unit Testing
- With Dependencies(testing a function that call a function) - Integration Testing
- Full Flow(validating a DOM after a click ) - E2E

## Why Test

- Get an error if we break code
- Save Time
- Think about possible issues and bugs
- Integrate into build workflow
- Break up complex dependencies
- Improve our code

## Testing Setup

- Test Runner
  - Executes our tests, summarize results
  - Mocha
- Assertion Library
  - Define testing Logic conditions
  - Chai
- Jest - Test Runner + Assertion Library
- Headless Browser
  - Simulates browser integration
  - Puppeteer
