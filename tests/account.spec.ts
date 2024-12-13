import {test, expect} from '@playwright/test';
import Account from '../pages/account.page';

test.describe('My Account', () => {
    let account : Account;

    test.beforeEach(async ({ page }) => {
        account = new Account(page);
       await account.navigate();
    })
    

    test('Access Orders', async ({page})=> {
    
        await account.ordersBtn.click();
        await expect(page).toHaveURL(/.*orders/);

    });
    test('Access Downloads', async ({page}) => {
  
        await account.downloadBtn.click();
        await expect(page).toHaveURL(/.*downloads/);

    });
});

test.describe('Account Page', () => {
    let account : Account;
    test.use({ storageState: 'notLoggedInState.json' });

    test.beforeEach(async ({ page }) => {
        account = new Account(page);
        await account.navigate();
    })

    test('Verify login and registration visible', async ({ page }) => {
        
        await expect(account.loginText).toBeVisible();
        await expect(account.registerText).toBeVisible();
    }); 
});

   
    

