const { basePage } = require('./basePage')

class HomePage extends basePage {
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

    async clickGetStarted() {
        await this.getStartedButton.click()
    }

    async clickFeatures() {
        await this.featuresLink.click()
    }

    async clickPricing() {
        await this.pricingLink.click()
    }

    async clickContact() {
        await this.contactLink.click()
    }

}

module.exports = { HomePage }