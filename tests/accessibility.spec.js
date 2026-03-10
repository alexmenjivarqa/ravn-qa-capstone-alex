const { test, expect } = require('@playwright/test')
const { AxeBuilder } = require('@axe-core/playwright')

const pages = [
    { name: 'Homepage', url: '/' },
    { name: 'Features section', url: '/#features' },
    { name: 'Pricing section', url: '/#pricing' },
    { name: 'Contact section', url: '/#contact' },
    { name: 'Login page', url: '/login' }
]

test.describe('Accessibility Tests - WCAG 2.1 Level AA', () => {

    for (const { name, url } of pages) {
        test(`${name} passes WCAG 2.1 AA accessibility audit`, async ({ page }) => {
            await page.goto(url)
            await page.waitForLoadState('networkidle')

            const results = await new AxeBuilder({ page })
                .withTags(['wcag2a', 'wcag2aa'])
                .analyze()

            expect(results.violations).toEqual([])
        })
    }
})