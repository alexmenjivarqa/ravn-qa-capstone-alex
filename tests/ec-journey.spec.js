const { test } = require('../fixtures/index')
const { expect } = require('@playwright/test')

test.describe('Navigation and CTA Journey - Edge Cases', () => {
    let homePage
    let featuresPage
    let pricingPage
    let contactPage

    test.beforeEach(async ({ homePage: HomePage, featuresPage: FeaturesPage, pricingPage: PricingPage, contactPage: ContactPage }) => {
        homePage = HomePage
        featuresPage = FeaturesPage
        pricingPage = PricingPage
        contactPage = ContactPage
    })

    // NTC_006
    test('Direct URL with anchor navigates to the correct section', async ({ page }) => {
        await featuresPage.goto()
        await expect(page).toHaveURL('/#features')
        expect(await featuresPage.featuresHeading.isVisible()).toBe(true)

        await pricingPage.goto()
        await expect(page).toHaveURL('/#pricing')
        expect(await pricingPage.pricingHeading.isVisible()).toBe(true)

        await contactPage.goto()
        await expect(page).toHaveURL('/#contact')
        expect(await contactPage.contactHeading.isVisible()).toBe(true)
    })

    // NTC_007
    test('Invalid anchor URL does not crash or break the page', async ({ page }) => {
        await page.goto('/#discounts')

        expect(await homePage.featuresLink.isVisible()).toBe(true)
        expect(await homePage.pricingLink.isVisible()).toBe(true)
        expect(await homePage.contactLink.isVisible()).toBe(true)
        expect(await homePage.getStartedButton.isVisible()).toBe(true)
    })

    // NTC_008
    test('Contact form accepts special characters in the name field', async ({ page }) => {
        await contactPage.goto()

        await contactPage.fillName('@lex#nd$r Dëř@s!')
        await contactPage.fillEmail('test@example.com')
        await contactPage.selectTopic('general')
        await contactPage.fillMessage('Testing special characters in name field')

        await expect(contactPage.nameInput).toHaveValue('@lex#nd$r Dëř@s!')
    })
})