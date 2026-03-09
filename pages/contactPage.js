const { basePage } = require('./basePage')

class ContactPage extends basePage {
    constructor(page) {
        super(page)

        //Locators
        this.contactHeading = page.getByRole('heading', { name: 'Get in Tuch' })
        this.contactSubText = page.getByText("Have a question? We'd love to hear from you.")
        this.nameInput = page.getByPlaceholder('Your name')
        this.emailContactInput = page.getByPlaceholder('you@example.com')
        this.messageInput = page.getByPlaceholder('Write your message here...')
        this.sendMessageButton = page.getByRole('button', { name: 'Send Message' })

        //Topic dropdown menu locators
        this.topicDropdown = page.getByRole('combobox')
        this.topicGeneralInquiry = page.getByRole('option', { name: 'General Inquiry' })
        this.topicFeatureRequest = page.getByRole('option', { name: 'Feature Request' })
        this.topicBugReport = page.getByRole('option', { name: 'Bug Report' })
        this.topicSupport = page.getByRole('option', { name: 'Support' })
        this.topicOther = page.getByRole('option', { name: 'Other' })
    }

    async goto() {
        await this.navigate('/#contact')
    }

    async fillName(name) {
        await this.nameInput.fill(name)
    }

    async fillEmail(email) {
        await this.emailContactInput.fill(email)
    }

    async selectTopic(topic) {
        await this.topicDropdown.selectOption(topic)
    }

    async fillMessage(message) {
        await this.messageInput.fill(message)
    }

    async fillForm(name, email, topic, message) {
        await this.fillName(name)
        await this.fillEmail(email)
        await this.selectTopic(topic)
        await this.fillMessage(message)
    }

    async clickSendMessage() {
        await this.sendMessageButton.click()
    }

    async isContactFormVisible() {
        return {
            contactHeading: await this.contactHeading.isVisible(),
            nameInput: await this.nameInput.isVisible(),
            emailInput: await this.emailContactInput.isVisible(),
            topicDropdown: await this.topicDropdown.isVisible(),
            messageInput: await this.messageInput.isVisible(),
            sendMessageButton: await this.sendMessageButton.isVisible()
        }
    }
}

module.exports = { ContactPage }