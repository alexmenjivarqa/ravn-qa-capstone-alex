const { test, expect } = require('@playwright/test')
const path = require('path')
const fs = require('fs')

const viewports = [
    { name: 'desktop', width: 1920, height: 1080 },
    { name: 'tablet', width: 768, height: 1024 },
    { name: 'mobile', width: 375, height: 667 }
]

const pages = [
    { name: 'homepage', url: '/' },
    { name: 'features', url: '/#features' },
    { name: 'pricing', url: '/#pricing' },
    { name: 'contact', url: '/#contact' },
    { name: 'login', url: '/login' }
]

for (const viewport of viewports) {
    for (const { name, url } of pages) {
        test(`${name} - ${viewport.name} screenshot`, async ({ page, browserName }) => {
            await page.setViewportSize({ width: viewport.width, height: viewport.height })
            await page.goto(url)
            await page.waitForLoadState('networkidle')

            await page.addStyleTag({
                content: `*, *::before, *::after { animation: none !important; transition: none !important; }`
            })

            const screenshotPath = path.join(__dirname, '..', 'screenshots', browserName, viewport.name, `${name}.png`)
            fs.mkdirSync(path.dirname(screenshotPath), { recursive: true })

            await page.screenshot({ path: screenshotPath, fullPage: true })
        })
    }
}

test('contact form - validation errors state - desktop', async ({ page, browserName }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/#contact')
    await page.waitForLoadState('networkidle')
    await page.addStyleTag({
        content: `*, *::before, *::after { animation: none !important; transition: none !important; }`
    })
    await page.getByRole('button', { name: 'Send Message' }).click()

    const screenshotPath = path.join(__dirname, '..', 'screenshots', browserName, 'desktop', 'contact-form-validation.png')
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true })
    await page.screenshot({ path: screenshotPath, fullPage: true })
})

test('login form - empty state - desktop', async ({ page, browserName }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/login')
    await page.waitForLoadState('networkidle')
    await page.addStyleTag({
        content: `*, *::before, *::after { animation: none !important; transition: none !important; }`
    })

    const screenshotPath = path.join(__dirname, '..', 'screenshots', browserName, 'desktop', 'login-form-empty.png')
    fs.mkdirSync(path.dirname(screenshotPath), { recursive: true })
    await page.screenshot({ path: screenshotPath, fullPage: true })
})