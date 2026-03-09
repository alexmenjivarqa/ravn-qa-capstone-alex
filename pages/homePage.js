const { BasePage } = require('./basePage')

class HomePage extends BasePage {
    constructor(page) {
        super(page)

        // Navegation Locators
        this.featuresLink = page.locator('nav').getByRole('link', { name: 'Features' })
        this.pricingLink = page.locator('nav').getByRole('link', { name: 'Pricing' })
        this.contactLink = page.locator('nav').getByRole('link', { name: 'Contact' })
        this.getStartedButton = page.locator('nav').getByRole('link', { name: 'Get Started' })

        // Hero Locators
        this.heroHeading = page.getByRole('heading', { name: 'Track Every Expence, Acheive Every Goal' })
        this.startFreeTrialButton = page.getByRole('link', { name: 'Start Free Trial' })
        this.watchDemoButton = page.getByRole('button', { name: 'Watch Demo' })
    }

    async goto() {
        await this.navigate('/')
    }

    async clickStartFreeTrial() {
        await this.startFreeTrialButton.click()
    }

    async clickWatchDemo() {
        await this.watchDemoButton.click()
    }

    async isHeadingVisible() {
        return await this.heroHeading.isVisible()
    }
}

module.exports = { HomePage }