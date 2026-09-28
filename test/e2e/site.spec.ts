import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('keyboard users can skip navigation', async ({ page }) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
})

test('mobile menu supports Escape, navigation and viewport changes', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const toggle = page.getByRole('button', { name: 'Open menu' })
  await toggle.click()
  await expect(page.getByRole('navigation', { name: 'Mobile' })).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(toggle).toBeFocused()
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await toggle.click()
  await page
    .getByRole('navigation', { name: 'Mobile' })
    .getByRole('link', { name: 'Work', exact: true })
    .click()
  await expect(page).toHaveURL(/#work$/)
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  await toggle.click()
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.setViewportSize({ width: 390, height: 844 })
  await expect(toggle).toHaveAttribute('aria-expanded', 'false')
})

test('preserves product inventory and working section destinations', async ({
  page,
}) => {
  await page.goto('/')
  const destinations = [
    ['QueueWing', 'https://queuewing.com/'],
    ['LifeBinder', 'https://lifebinder.astralhive.net/'],
    [
      'AstralCalc',
      'https://play.google.com/store/apps/details?id=com.ahs.astralcalc',
    ],
    ['GymLog', 'https://play.google.com/store/apps/details?id=com.ahs.gymlog'],
    [
      'BumpSync',
      'https://play.google.com/store/apps/details?id=com.ahs.bumpsync',
    ],
    ['LibraPix', 'https://github.com/asad-albadi/LibraPix'],
    ['streamdock-n3', 'https://github.com/asad-albadi/streamdock-n3'],
  ]
  for (const [name, href] of destinations) {
    const card = page
      .locator('#work a')
      .filter({ has: page.getByRole('heading', { name, exact: true }) })
    await expect(card).toHaveAttribute('href', href)
  }
  await expect(page.locator('#work')).toContainText('Coming soon')
  for (const id of ['top', 'services', 'work', 'about', 'contact']) {
    await expect(page.locator(`#${id}`)).toHaveCount(1)
  }
})

for (const width of [320, 390, 768, 1024, 1440, 1920]) {
  test(`accessible layout and loaded assets at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.emulateMedia({ reducedMotion: 'reduce' })
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto('/')
    await page.evaluate(() => document.fonts.ready)
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
    for (const id of ['services', 'work', 'about', 'contact']) {
      await page.locator(`#${id}`).scrollIntoViewIfNeeded()
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true)
    }
    expect(
      await page
        .locator('img')
        .evaluateAll((images) =>
          images.every((image) => image.complete && image.naturalWidth > 0),
        ),
    ).toBe(true)
    expect(errors).toEqual([])
    const accessibility = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()
    expect(accessibility.violations).toEqual([])
  })
}

test('mobile layout reflows with text enlarged to 200 percent', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '200%'
  })
  await page.evaluate(() => document.fonts.ready)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
})

test('decorative parallax responds to scroll and respects reduced motion', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')
  const artwork = page.locator('.studio-preview')
  await expect
    .poll(() =>
      artwork.evaluate((el) => el.style.getPropertyValue('--parallax-y')),
    )
    .not.toBe('')
  const initial = await artwork.evaluate((el) =>
    el.style.getPropertyValue('--parallax-y'),
  )
  await page.evaluate(() => window.scrollTo({ top: 350, behavior: 'instant' }))
  await expect
    .poll(() =>
      artwork.evaluate((el) => el.style.getPropertyValue('--parallax-y')),
    )
    .not.toBe(initial)
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await expect
    .poll(() =>
      artwork.evaluate((el) => el.style.getPropertyValue('--parallax-y')),
    )
    .toBe('0px')
  await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }))
  await expect
    .poll(() =>
      artwork.evaluate((el) => el.style.getPropertyValue('--parallax-y')),
    )
    .toBe('0px')
})

test('featured product content stays within cards with enlarged text', async ({
  page,
}) => {
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 844 })
    await page.goto('/')
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '200%'
    })
    await page.evaluate(() => document.fonts.ready)
    const overflow = await page
      .locator(
        '.studio-preview, .studio-preview__heading, .studio-preview__product',
      )
      .evaluateAll((elements) =>
        elements
          .filter((el) => el.scrollWidth > el.clientWidth + 1)
          .map((el) => el.className),
      )
    expect(overflow).toEqual([])
  }
})
