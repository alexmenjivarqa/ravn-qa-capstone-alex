class basePage {
    constructor(page) {
        this.page = page
    }

    async navigate(url) {
        await this.page.goto(url)
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle')
    }

    async getTitle() {
        return await this.page.title()
    }
}

module.exports = { basePage }