class BasePage {
    constructor(page) {
        this.page = page

        // Locators
        this.featuresLink = page.getByRole('link', { name: 'Features' })
        this.pricingLink = page.getByRole('link', { name: 'Pricing' })
        this.contactLink = page.getByRole('link', { name: 'Contact' })
        this.getStartedButton = page.getByRole('link', { name: 'Get Started' })
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