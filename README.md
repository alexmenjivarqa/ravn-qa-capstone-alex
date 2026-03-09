# RAVN QA Capstone - Alex Menjivar

## Project Overview
Automated testing suite for the Conteo Landing Page (https://conteo-web-app.vercel.app/). 
This project covers the Navigation and CTA Journey user flow, including happy path tests, 
negative scenarios, and edge cases using Playwright with JavaScript and Page Object Model structure.

## Prerequisites
- Node.js 18+
- npm

## Installation
```bash
npm ci
npx playwright install
```

## Running Tests
```bash
# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run specific test file
npx playwright test tests/journey.spec.js

# Run on specific browser
npx playwright test --project=chromium

# Run in UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report
```

## Project Structure
- `tests/` - Test files containing all automated test cases
  - `journey.spec.js` - Main user journey tests (10 test cases)
- `pages/` - Page Object Model classes
  - `basePage.js` - Shared navigation methods inherited by all pages
  - `HomePage.js` - Hero section and CTA buttons
  - `FeaturesPage.js` - Features section verification
  - `PricingPage.js` - Pricing plans and CTAs
  - `ContactPage.js` - Contact form interactions
  - `LoginPage.js` - Login page verification
- `playwright.config.js` - Playwright configuration with multiple browsers
- `.github/workflows/playwright.yml` - CI/CD pipeline configuration

## Test Coverage
- 10 automated test cases
- Covers critical user journey: Navigation Flow and CTA Buttons
- Cross-browser testing: Chromium, Firefox, WebKit
- Test categories:
  - Happy Path (5 tests): Navbar visibility, navbar navigation, CTA redirects
  - Edge Cases (3 tests): Direct URL navigation, invalid anchor, special characters
  - Negative Scenarios (2 tests): Invalid email format, empty form submission

## CI/CD
Tests run automatically on every push and pull request via GitHub Actions.
View results: https://github.com/alexmenjivarqa/ravn-qa-capstone-alex/actions

## Author
Alex Menjivar - RAVN QA Capstone 2026
