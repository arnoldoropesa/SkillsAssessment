import { test, expect } from '@playwright/test';

test('Edit a Kanban Card', async function ({ page }) {

//Open Kanban Web application
  await page.goto('https://kanban-566d8.firebaseapp.com/');
  const card = page.locator('body div section:nth-child(2) article.bg-white').nth(0); 
  const cardExist = await card.isVisible();

    if (cardExist) {
    console.log('Card exists and is visible.');
    await card.click();
    
    } 
      else {
      console.log('Card not visible, proceeding to the next column.');
    

//Locate 1st card in the 2nd column
    card = page.locator('body div section:nth-child(2) article.bg-white').nth(0);
    const cardExist = await card.isVisible();

    if (cardExist) {
      console.log('Card exists and is visible.');
      await card.click();
    } else {
      console.log('Card not visible in the current column, checking the next column.');
  
//Locate 1st card in the 3rd column
      const nextCard = page.locator('body div section:nth-child(3) article.bg-white').nth(0);
      const nextColumnExist = await nextCard.isVisible();

      if (nextColumnExist) {
        console.log('Next column card exists and is visible.');
        await nextCard.click();
      } 

      else {
        console.log('No more columns available.');
        }
      }
    }
    
    await new Promise(resolve => setTimeout(resolve, 3000));
});