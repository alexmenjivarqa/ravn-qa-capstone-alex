const { test, expect } = require('@playwright/test')

const viewports = [
    { name: 'desktop', width: 1920, height: 1080 },
    { name: 'mobile', width: 375, height: 667 }
]

const pages = [
    { name: 'homepage', url: '/' },
    { name: 'features', url: '/#features' },
    { name: 'pricing', url: '/#pricing' },
    { name: 'contact', url: '/#contact' },
    { name: 'login', url: '/login' }
]

async function disableAnimations(page) {
    await page.addStyleTag({
        content: `*, *::before, *::after { animation: none !important; transition: none !important; }`
    })
}

for (const viewport of viewports) {
    for (const { name, url } of pages) {
        test(`${name} - ${viewport.name} - layout consistency`, async ({ page }) => {
            await page.setViewportSize({ width: viewport.width, height: viewport.height })
            await page.goto(url)
            await page.waitForLoadState('networkidle')
            await disableAnimations(page)

            await expect(page).toHaveScreenshot(`${name}-${viewport.name}.png`, {
                maxDiffPixelRatio: 0.2,
                fullPage: true
            })
        })
    }
}

test('contact form - empty state styling', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/#contact')
    await page.waitForLoadState('networkidle')
    await disableAnimations(page)

    await expect(page.locator('.home-contact-form')).toHaveScreenshot('contact-form-empty.png', {
        maxDiffPixelRatio: 0.2
    })
})

test('contact form - validation errors styling', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/#contact')
    await page.waitForLoadState('networkidle')
    await disableAnimations(page)
    await page.getByRole('button', { name: 'Send Message' }).click()

    await expect(page.locator('.home-contact-form')).toHaveScreenshot('contact-form-validation.png', {
        maxDiffPixelRatio: 0.2
    })
})

test('navbar CTA button - desktop appearance', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')
    await page.waitForLoadState('networkidle')
    await disableAnimations(page)

    await expect(page.locator('nav')).toHaveScreenshot('navbar-desktop.png', {
        maxDiffPixelRatio: 0.2
    })
})

test('pricing section - desktop vs mobile layout', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/#pricing')
    await page.waitForLoadState('networkidle')
    await disableAnimations(page)
    await expect(page).toHaveScreenshot('pricing-desktop.png', { maxDiffPixelRatio: 0.2, fullPage: true })

    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/#pricing')
    await page.waitForLoadState('networkidle')
    await disableAnimations(page)
    await expect(page).toHaveScreenshot('pricing-mobile.png', { maxDiffPixelRatio: 0.2, fullPage: true })
})