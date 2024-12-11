import { test, expect } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import RandomzeComponent from '../pages/component/randomize.component';

test.describe('Contact', () => {
let contacPage: ContactPage;
let randomizePage: RandomzeComponent;

test.beforeEach(async ({ page }) => {
  contacPage = new ContactPage(page);
  randomizePage = new RandomzeComponent(page);
  await contacPage.navigate();
})

  test('Fill contact form and verify success message', async ({ page }) => {
   
    //  fill out the input fields
    // randomize tests
    await contacPage.fillTheForm(randomizePage.randomName, randomizePage.randomEmail, contacPage.randomizeComponent().randomPhoneNumber, contacPage.randomizeComponent().randomMessage);

    // add a soft assertion
    // await expect.soft(page.locator('.contact-message textarea')).toHaveText("Fail test message")

    // click submit
    await contacPage.clickBtn();

    // expect(test.info().errors.length).toBeLessThan(1)

    // verify success message
    await expect(contacPage.successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly')
  })

})