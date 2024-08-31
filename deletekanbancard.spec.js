import { test, expect } from '@playwright/test';

test('Delete Kanban Card', async ({ page }) => {
//Open the Kanban Web application
    await page.goto('https://kanban-566d8.firebaseapp.com/');

//Locate 1st card in the 1st column
    let card = page.locator('body div section:nth-child(1) article.bg-white').nth(0);
    const cardExist = await card.isVisible();

    if (cardExist) {
    console.log('Card exists and is visible.');

    const locator = page.locator('body > div:nth-child(1) > main:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > section:nth-child(2) > div:nth-child(2) > article:nth-child(1) > h3:nth-child(1)');
    const textContent = await locator.textContent();
    console.log('Text content:', textContent);

    await card.click();

 
// Click 3 dots/svg icon for delete
    const svgLocator = page.locator("(//*[name()='svg'][@class='fill-medium-grey'])[2]");
    await svgLocator.click();
    await page.getByText('Delete Task').click();
    await page.getByRole('button', { name: 'Delete' }).click();

    }
    else {
      console.log('Card not visible, proceeding to the next column.');
      

// Locate 1st card in 2nd column
      card = page.locator('body div section:nth-child(2) article.bg-white').nth(0);
      const cardExist = await card.isVisible();
  
      if (cardExist) {
        console.log('Card exists and is visible.');
        await card.click();

// Click 3 dots/svg icon for delete
    const svgLocator = page.locator("(//*[name()='svg'][@class='fill-medium-grey'])[2]");
    await svgLocator.click();
    await page.getByText('Delete Task').click();
    await page.getByRole('button', { name: 'Delete' }).click();

      } else {
        console.log('Card not visible in the current column, checking the next column.');
    
// Locate 1st card in 3rd column
        const nextCard = page.locator('body div section:nth-child(3) article.bg-white').nth(0);
        const nextColumnExist = await nextCard.isVisible();
  
        if (nextColumnExist) {
          console.log('Next column card exists and is visible.');
          await nextCard.click();
        } 
  
        else {
          console.log('No more columns available.');

// Click 3 dots/svg icon for delete
      const svgLocator = page.locator("(//*[name()='svg'][@class='fill-medium-grey'])[2]");
      await svgLocator.click();
      await page.getByText('Delete Task').click();
      await page.getByRole('button', { name: 'Delete' }).click();
    }
  }
}

// Pause the script for observation
await new Promise(resolve => setTimeout(resolve, 3000));

});