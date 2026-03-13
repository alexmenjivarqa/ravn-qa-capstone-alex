# Conteo Landing Page — Automated Test Suite

Automated testing suite for the Conteo Landing Page (https://conteo-web-app.vercel.app/). This project covers the Navigation and CTA Journey user flow using Playwright with JavaScript and Page Object Model structure. The suite includes functional tests, accessibility auditing, screen reader testing, and visual regression testing.

---

## Prerequisites
- Node.js 18+
- npm

## Installation

```bash
npm ci
npx playwright install
```

---

## Running Tests

```bash
# Run all tests
npx playwright test

# Run in headed mode
npx playwright test --headed

# Run specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox

# Run in UI mode
npx playwright test --ui

# View HTML report
npx playwright show-report
```

### Run specific test suites

```bash
# Happy path, edge cases, negative scenarios
npx playwright test tests/hp-journey.spec.js
npx playwright test tests/ec-journey.spec.js
npx playwright test tests/ns-journey.spec.js

# Accessibility tests
npx playwright test tests/accessibility.spec.js

# Visual baseline screenshots
npx playwright test tests/visual.spec.js

# Visual regression comparison
npx playwright test tests/visual-regression.spec.js

# Update visual regression baselines
npx playwright test tests/visual-regression.spec.js --update-snapshots
```

---

## Project Structure

```
ravn-qa-capstone-alex/
├── .github/
│   └── workflows/
│       └── playwright.yml          # CI/CD pipeline
├── pages/                          # Page Object Model classes
│   ├── basePage.js                 # Shared navigation methods
│   ├── homePage.js                 # Hero section and CTA buttons
│   ├── featuresPage.js             # Features section verification
│   ├── pricingPage.js              # Pricing plans and CTAs
│   ├── contactPage.js              # Contact form interactions
│   └── loginPage.js                # Login page verification
├── tests/                          # Test files
│   ├── hp-journey.spec.js          # Happy path tests (NTC_001–005)
│   ├── ec-journey.spec.js          # Edge case tests (NTC_006–008)
│   ├── ns-journey.spec.js          # Negative scenario tests (NTC_009–010)
│   ├── accessibility.spec.js       # Automated WCAG 2.1 AA accessibility tests
│   ├── visual.spec.js              # Baseline screenshot capture
│   └── visual-regression.spec.js  # Visual regression comparison tests
├── fixtures/
│   └── index.js                    # Playwright fixtures for page objects
├── screenshots/                    # Baseline screenshots for visual testing
│   ├── chromium/
│   │   ├── desktop/
│   │   ├── tablet/
│   │   └── mobile/
│   └── firefox/
│       ├── desktop/
│       ├── tablet/
│       └── mobile/
├── accessibility-reports/          # Generated HTML accessibility reports (gitignored)
├── playwright.config.js            # Playwright configuration
└── package.json
```

---

## Test Coverage

### Functional Tests — 10 test cases
Cross-browser testing on Chromium and Firefox across the Navigation and CTA Journey.

| Category | Tests | Description |
|---|---|---|
| Happy Path | 5 | Navbar visibility, navigation, CTA redirects |
| Edge Cases | 3 | Direct URL navigation, invalid anchor, special characters |
| Negative Scenarios | 2 | Invalid email format, empty form submission |

### Accessibility Tests — 5 test cases
Automated WCAG 2.1 Level AA auditing using `@axe-core/playwright`.

- Tests run against: Homepage, Features, Pricing, Contact, Login
- Configured for WCAG 2.1 Level A and AA standards
- Generates HTML violation reports per page automatically
- Known false positives excluded and documented with comments

### Visual Regression Tests — 14 test cases
Baseline screenshot capture and visual comparison using Playwright's `toHaveScreenshot`.

- **Viewports:** Desktop (1920x1080), Tablet (768x1024), Mobile (375x667)
- **Browsers:** Chromium, Firefox
- **Pages:** Homepage, Features, Pricing, Contact, Login
- **Form states:** Contact form validation errors, Login form empty state
- Threshold set to `maxDiffPixelRatio: 0.2` to handle minor anti-aliasing differences

---

## CI/CD
Tests run automatically on every push and pull request via GitHub Actions.

View results: https://github.com/alexmenjivarqa/ravn-qa-capstone-alex/actions

---

## Author
Alex Menjivar