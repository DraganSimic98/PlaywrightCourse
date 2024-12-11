import { test, expect } from '@playwright/test';
import CartPage from '../pages/cart.page';
const path = require('path');

test.describe('Upload File', () => {
let cartPage: CartPage;

test.beforeEach(async ({ page }) => {
    cartPage = new CartPage(page);
     // Open url
     await cartPage.navigation();
})


//Parametreize Tests
const fileName = ['logo.png', 'picure.png'];

for(const name of fileName){
  test(`Should upload a ${name} file`, async ({ page }) => {

     // provide test file path
     const filePath = path.join(__dirname, `../data/${name}`);
 
     await cartPage.uploadComponent().uploadFile(filePath);
 
     // assertion
     await expect(cartPage.uploadComponent().successTxt)
       .toContainText('uploaded successfully', {timeout: 10000});
   })
}

  test('should upload a test file on a hidden input field', async ({ page }) => {

    // provide test file path
    const filePath = path.join(__dirname, '../data/picure.png');

    // DOM manipulation
    await page.evaluate(() => {
      const selector = document.querySelector('input#upfile_1');
      if (selector) {
        selector.className = ''
      }
    })

   await cartPage.uploadComponent().uploadFile(filePath);

    // assertion
    await expect(cartPage.uploadComponent().successTxt)
      .toContainText('uploaded successfully', {timeout: 10000});
  })
})