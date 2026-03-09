class basePage {
    constructor(page) {
        this.page = page

        // Locators
        this.featuresLink = page.locator('nav').getByRole('link', { name: 'Features' })
        this.pricingLink = page.locator('nav').getByRole('link', { name: 'Pricing' })
        this.contactLink = page.locator('nav').getByRole('link', { name: 'Contact' })
        this.getStartedButton = page.locator('nav').getByRole('link', { name: 'Get Started' })
    }

    async navigate(url) {
        await this.page.goto(url)
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

    async clickGetStarted() {
        await this.getStartedButton.click()
    }
}

module.exports = { BasePage }