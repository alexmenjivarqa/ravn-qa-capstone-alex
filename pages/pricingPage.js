const { BasePage } = require('./basePage')

class PricingPage extends BasePage {
    constructor(page) {
        super(page)

        //Locators
        this.pricingHeading = page.getByRole('heading', { name: 'Simple, Transparent Pricing' })
        this.pricingSubText = page.getByText('Choose the plan that works for you')
        this.freePlanText = page.getByText('Free')
        this.premiumPlanText = page.getByText('Premium')
        this.startFreeTrialButton = page.getByRole('link', { name: 'Start Free Trial' })
        this.getStartedFreeButton = page.getByRole('link', { name: 'Get Started Free' })
    }

    async goto() {
        await this.navigate('/#pricing')
    }

    async clickGetStartedFree() {
        await this.getStartedFreeButton.click()
    }

    async clickStartFreeTrial() {
        await this.startFreeTrialButton.click()
    }

    async arePricingPlansVisible() {
        return {
            pricingHeading: await this.pricingHeading.isVisible(),
            pricingSubText: await this.pricingSubText.isVisible(),
            freePlanHeading: await this.freePlanHeading.isVisible(),
            premiumPlanHeading: await this.premiumPlanHeading.isVisible()
        }
    }
}

module.exports = { PricingPage }