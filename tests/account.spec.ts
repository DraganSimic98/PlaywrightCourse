import {test, expect} from '@playwright/test';

test.describe('My Account', () => {

    test('Access Orders', async ({page})=> {
        await page.goto('/my-account');
        await page.locator('//*[@id="post-9"]/div/div/div/nav/ul/li[2]/a').click();
        await expect(page).toHaveURL(/.*orders/);
    });
    test('Access Downloads', async ({page}) => {
        await page.goto('/my-account');
        await page.locator('//*[@id="post-9"]/div/div/div/nav/ul/li[3]/a').click();
        await expect(page).toHaveURL(/.*downloads/);
    });
});

test.describe('Account Page', () => {
    test.use({ storageState: 'notLoggedInState.json' });

    test('Verify login and registration visible', async ({ page }) => {
        await page.goto('/my-account');
        await expect(page.locator('//div[@class="u-column1 col-1"]/h2[text() = "Login"]')).toBeVisible();
        await expect(page.locator('//div[@class="u-column2 col-2"]/h2[text() = "Register"]')).toBeVisible();
    }); 
});

   
    

