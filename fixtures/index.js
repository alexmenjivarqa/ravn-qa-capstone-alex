const { test: base } = require('@playwright/test')
const { HomePage } = require('../pages/homePage')
const { FeaturesPage } = require('../pages/featuresPage')
const { PricingPage } = require('../pages/pricingPage')
const { ContactPage } = require('../pages/contactPage')
const { LoginPage } = require('../pages/loginPage')

const test = base.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    featuresPage: async ({ page }, use) => {
        await use(new FeaturesPage(page))
    },
    pricingPage: async ({ page }, use) => {
        await use(new PricingPage(page))
    },
    contactPage: async ({ page }, use) => {
        await use(new ContactPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    }
})

module.exports = { test }