// If you want to setup automaticly login, first you should setup this file
// Secound, go to playwright.config.ts and add thise two lines:
// globalSetup: require.resolve('./utils/global-setup'),
// storageState: 'loggedInState.json',
// go to playwrigt.config.ts and check the example.

// Code on line 16 is added to avoid login state and stay loged out for testing purpose,
// Also added code for avoid login state is on account.spec.ts file, test.use().

import { chromium, FullConfig } from "@playwright/test";

async function globalSetup(config: FullConfig){
    const browser = await chromium.launch();    
    const page = await browser.newPage();       
    
    await page.goto('https://practice.sdetunicorns.com/my-account/'); 
    await page.context().storageState({path:'notLoggedInState.json'});     

    // login
    await page.locator('#username').fill('practiceuser1');      
    await page.locator('#password').fill('PracticePass1!');
    await page.locator('[value ="Log in"]').click();   
    
    // save singed-in state to 'loggedInState.json'

    await page.context().storageState({path:'loggedInState.json'});
    await browser.close();

}

export default globalSetup;