const { BasePage } = require('./basePage')

class HomePage extends BasePage {
    constructor(page) {
        super(page)

        // Locators
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