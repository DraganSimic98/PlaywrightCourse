import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';


test.describe('Home', () => {
  let homePage:HomePage;
  
test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  await homePage.navigation();
})


  test('Open HomePage and verify title', async ({ page }) => {

    // verify title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
  })

  test('Open About page and verify title', async ({ page }) => {
  
    await homePage.clickOnNavBarElement(homePage.openAboutPage);
    // verify title
    await expect(page).toHaveTitle('About – Practice E-Commerce Site');
  })

  test('Click get started button using CSS Selector', async ({ page }) => {

    await expect(page).not.toHaveURL(/.*#get-started/);

    // click the button
    await homePage.getStartetBtn.click();

    // verify url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  })

  test('Verify heading text is visible using text selector', async ({ page }) => {

    // find the text locator
   // const headingText = page.locator('text=Think different. Make different.')

    // verify heading text is visible
    await expect(homePage.headingText).not.toBeHidden();
    await expect(homePage.headingText).toBeVisible();
  })

  test('Verify home link is enabled using text and css selector', async ({ page }) => {

     //find the home text
        //Combination CSS and text selector (two ways):
        const homeLink =  homePage.homeLink;
        const homeText =  homePage.homeText;
        const homeSelect =  homePage.homeSelect;

        await expect(homeLink).toBeEnabled();
        await expect(homeText).toBeEnabled();
        await expect(homeSelect).toBeEnabled();
  })

  test('Verify search icon is visible using xpath selector', async ({ page }) => {
 
    // find the search icon
    const searchIcon = homePage.searchIcon;

    // verify search icon is visible
    await expect(searchIcon).toBeVisible();
  })

  test('Verify text of all nav links', async ({ page }) => {
   
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];


    // find the nav links
    const navLinks = homePage.navLinks;
   
    // print out all the links
    for (const el of await navLinks.elementHandles()) {
      console.log(await el.textContent());
    }

    // verify nav links text
    // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
  })
})