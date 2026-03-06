const { test, expect } = require('@playwright/test')
const { HomePage } = require('../pages/homePage')
const { FeaturesPage } = require('../pages/featuresPage')
const { PricingPage } = require('../pages/pricingPage')
const { ContactPage } = require('../pages/contactPage')
const { LoginPage } = require('../pages/loginPage')

test.describe('Navigation and CTA Journey', () => {

    // NTC_001 - Happy path
    test('Navbar displays all navigation items when homepage loads', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        expect(await homePage.featuresLink.isVisible()).toBe(true)
        expect(await homePage.pricingLink.isVisible()).toBe(true)
        expect(await homePage.contactLink.isVisible()).toBe(true)
        expect(await homePage.getStartedButton.isVisible()).toBe(true)
    })

    // NTC_002 - Happy path
    test('Clicking Features in the navbar, navigates to the Features section', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickFeatures()

        await expect(page).toHaveURL('/#features')
    })

    // NTC_003 - Happy path
    test('Clicking Pricing in the navbar, navigates to the Pricing section', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickPricing()

        await expect(page).toHaveURL('/#pricing')
    })

    // NTC_004 - Happy path
    test('Clicking Contact in the navbar, navigates to the Contact section', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickContact()

        await expect(page).toHaveURL('/#contact')
    })

    // NTC_005 - Happy path
    test('Get Started CTA button redirects to the login page', async ({ page }) => {
        const homePage = new HomePage(page)
        await homePage.goto()

        await homePage.clickGetStarted()

        await expect(page).toHaveURL('/login')
    })

    // NTC_006 - Edge Case
    test('Direct URL with anchor navigates to the correct section', async ({ page }) => {
        const featuresPage = new FeaturesPage(page)
        const pricingPage = new PricingPage(page)
        const contactPage = new ContactPage(page)

        // Navigate to Features section
        await featuresPage.goto()
        await expect(page).toHaveURL('/#features')
        expect(await featuresPage.featuresHeading.isVisible()).toBe(true)

        // Navigate to Pricing section
        await pricingPage.goto()
        await expect(page).toHaveURL('/#pricing')
        expect(await pricingPage.pricingHeading.isVisible()).toBe(true)

        // Navigate to Contact section
        await contactPage.goto()
        await expect(page).toHaveURL('/#contact')
        expect(await contactPage.contactHeading.isVisible()).toBe(true)
    })

    // NTC_007 - Edge Case
    test('Invalid anchor URL does not crash or break the page', async ({ page }) => {
        const homePage = new HomePage(page)

        // Navigate to a non-existent anchor
        await page.goto('/#discounts')

        // Page should still load normally
        expect(await homePage.featuresLink.isVisible()).toBe(true)
        expect(await homePage.pricingLink.isVisible()).toBe(true)
        expect(await homePage.contactLink.isVisible()).toBe(true)
        expect(await homePage.getStartedButton.isVisible()).toBe(true)
    })

    // NTC_008 - Edge Case
    test('Contact form accepts special characters in the name field', async ({ page }) => {
        const contactPage = new ContactPage(page)
        await contactPage.goto()

        await contactPage.fillName('@lex#nd$r Dëř@s!')
        await contactPage.fillEmail('test@example.com')
        await contactPage.selectTopic('general')
        await contactPage.fillMessage('Testing special characters in name field')

        await expect(contactPage.nameInput).toHaveValue('@lex#nd$r Dëř@s!')
    })

    // NTC_009 - Negative scenario
    test('Contact form submits without validating invalid email format', async ({ page }) => {
        const contactPage = new ContactPage(page)
        await contactPage.goto()

        // Filling form with invalid email format
        await contactPage.fillName('Alex Deras')
        await contactPage.fillEmail('alexgmail.com')
        await contactPage.selectTopic('general')
        await contactPage.fillMessage('Testing invalid email format')

        await contactPage.clickSendMessage()

        await expect(page).toHaveURL('/#contact')
    })

    // NTC_010 - Negative scenario
    test('Contact form does not submit when all fields are empty', async ({ page }) => {
        const contactPage = new ContactPage(page)
        await contactPage.goto()

        await contactPage.clickSendMessage()

        await expect(page).toHaveURL('/#contact')

        await expect(contactPage.nameInput).toBeVisible()
        await expect(contactPage.emailContactInput).toBeVisible()
        await expect(contactPage.topicDropdown).toBeVisible()
        await expect(contactPage.messageInput).toBeVisible()
    })
})