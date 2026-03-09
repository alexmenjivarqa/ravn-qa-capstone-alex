const { test, expect } = require('@playwright/test')
const { HomePage } = require('../pages/homePage')
const { FeaturesPage } = require('../pages/featuresPage')
const { PricingPage } = require('../pages/pricingPage')
const { ContactPage } = require('../pages/contactPage')

test.describe('Navigation and CTA Journey - Edge Cases', () => {

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
})