const { test } = require('../fixtures/index')
const { expect } = require('@playwright/test')

test.describe('Navigation and CTA Journey - Negative Scenarios', () => {
    let contactPage

    test.beforeEach(async ({ contactPage: ContactPage }) => {
        contactPage = ContactPage
        await contactPage.goto()
    })

    // NTC_009
    test('Contact form submits without validating invalid email format', async ({ page }) => {
        await contactPage.fillName('Alex Deras')
        await contactPage.fillEmail('alexgmail.com')
        await contactPage.selectTopic('general')
        await contactPage.fillMessage('Testing invalid email format')

        await contactPage.clickSendMessage()

        await expect(page).toHaveURL('/#contact')
    })

    // NTC_010
    test('Contact form does not submit when all fields are empty', async ({ page }) => {
        await contactPage.clickSendMessage()

        await expect(page).toHaveURL('/#contact')

        await expect(contactPage.nameInput).toBeVisible()
        await expect(contactPage.emailContactInput).toBeVisible()
        await expect(contactPage.topicDropdown).toBeVisible()
        await expect(contactPage.messageInput).toBeVisible()
    })
})