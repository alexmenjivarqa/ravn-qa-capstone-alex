const { BasePage } = require('./BasePage')

class LoginPage extends BasePage {
    constructor(page) {
        super(page)

        //Locators
        this.signInHeading = page.getByRole('heading', { name: 'Expensive Tracker' })
        this.signInSubText = page.getByText("Sign in to your account")
        this.emailLogInInput = page.getByPlaceholder('you@example.com')
        this.passwordInput = page.getByPlaceholder('Your password')
        this.signInButton = page.getByRole('button', { name: 'Sign In' })
        this.continueButton = page.getByRole('button', { name: 'Continue with Google' })
        this.signUpButton = page.getByRole('button', { name: 'Sign Up' })
    }

    async goto() {
        await this.navigate('/login')
    }

    async fillEmail(email) {
        await this.emailLogInInput.fill(email)
    }

    async fillPassword(password) {
        await this.passwordInput.fill(password)
    }

    async fillLoginForm(email, password) {
        await this.fillEmail(email)
        await this.fillPassword(password)
    }

    async clickSignIn() {
        await this.signInButton.click()
    }

    async clickContinueWithGoogle() {
        await this.continueButton.click()
    }

    async clickSignUp() {
        await this.signUpButton.click()
    }

    async isLoginPageVisible() {
        return {
            signInHeading: await this.signInHeading.isVisible(),
            signInSubText: await this.signInSubText.isVisible(),
            emailLogInInput: await this.emailLogInInput.isVisible(),
            passwordInput: await this.passwordInput.isVisible(),
            signInButton: await this.signInButton.isVisible(),
            continueButton: await this.continueButton.isVisible(),
            signUpButton: await this.signUpButton.isVisible()
        }
    }
}

module.exports = { LoginPage }