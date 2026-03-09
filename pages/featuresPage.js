const { basePage } = require('./basePage')

class FeaturesPage extends basePage {
    constructor(page) {
        super(page)

        //Locators
        this.featuresHeading = page.getByRole('heading', { name: 'Evrything You Need to Manage Finances' })
        this.featureSubText = page.getByText('Powerful features designed to help you take control')
        this.multiAccountCard = page.getByRole('heading', { name: 'Multi-Account Management' })
        this.creditCardTrackingCard = page.getByRole('heading', { name: 'Credit Card Tracking' })
        this.expenseTrackingCard = page.getByRole('heading', { name: 'Expense Tracking by Category' })
        this.easyTransfersCard = page.getByRole('heading', { name: 'Easy Transfers' })
    }

    async goto() {
        await this.navigate('/#features')
    }

    async areAllFeaturesVisible() {
        return {
            featuresHeading: await this.featuresHeading.isVisible(),
            featuresSubText: await this.featuresSubText.isVisible(),
            multiAccountCard: await this.multiAccountCard.isVisible(),
            creditCardTrackingCard: await this.creditCardTrackingCard.isVisible(),
            expenseTrackingCard: await this.expenseTrackingCard.isVisible(),
            easyTransfersCard: await this.easyTransfersCard.isVisible()
        }
    }

}

module.exports = { FeaturesPage }