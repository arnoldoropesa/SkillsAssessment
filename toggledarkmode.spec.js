import { test, expect } from '@playwright/test';

test('test', async function ({ page }) {
  // 1. Open the Kanban app
  await page.goto('https://kanban-566d8.firebaseapp.com/');

  // 2. Toggle dark mode
  await page.locator('label').click();

  // 3. Verify that the dark mode has changed
  const backgroundColor = await page.evaluate(() => {
    return window.getComputedStyle(document.body).backgroundColor;
  });
  console.log('Current Background Color:', backgroundColor);
  const initialBackgroundColor = '#F4F7FD';

  if (backgroundColor !== initialBackgroundColor) {
    console.log('Dark Mode On');
  } else {
    console.error('Dark Mode Failed');
  }
  
})
