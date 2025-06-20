import { test, expect } from '@playwright/test';

test('Checkbox test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const locator = page.getByRole("checkbox");

    for (const checkbox of await locator.all()) {
        await checkbox.check();
    }
});