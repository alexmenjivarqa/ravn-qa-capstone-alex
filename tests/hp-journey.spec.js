const { test, expect } = require('@playwright/test')
const { HomePage } = require('../pages/homePage')

test.describe('Navigation and CTA Journey - Happy Path', () => {

    // NTC_001
    test('Navbar displays all navigation items when homepage loads', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        expect(await homePage.featuresLink.isVisible()).toBe(true)
        expect(await homePage.pricingLink.isVisible()).toBe(true)
        expect(await homePage.contactLink.isVisible()).toBe(true)
        expect(await homePage.getStartedButton.isVisible()).toBe(true)
    })

    // NTC_002
    test('Clicking Features in the navbar, navigates to the Features section', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickFeatures()

        await expect(page).toHaveURL('/#features')
    })

    // NTC_003
    test('Clicking Pricing in the navbar, navigates to the Pricing section', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickPricing()

        await expect(page).toHaveURL('/#pricing')
    })

    // NTC_004
    test('Clicking Contact in the navbar, navigates to the Contact section', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickContact()

        await expect(page).toHaveURL('/#contact')
    })

    // NTC_005
    test('Get Started CTA button redirects to the login page', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickGetStarted()

        await expect(page).toHaveURL('/login')
    })
})