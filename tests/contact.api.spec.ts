import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import RandomzeComponent from '../pages/component/randomize.component';
import { faker } from '@faker-js/faker';

test.describe('Contact', () => {
let contacPage: ContactPage;
let randomizePage: RandomzeComponent;
let fakerApi: APIRequestContext;
let randomUser: APIResponse; 


test.beforeAll(async ({ playwright }) => {
  fakerApi = await playwright.request.newContext({
    baseURL: 'https://jsonplaceholder.typicode.com/'
  });

  const response = await fakerApi.get('users');
  const responseBody = await response.json();
  const randomNumber = function getRandomNumber(min: number, max: number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() *( max-min+1))+min
  }
  randomUser = responseBody[0];
   
})


  test('Fill contact form and verify success message', async ({ page }) => {
   contacPage = new ContactPage(page);

   await contacPage.navigate();
    //  fill out the input fields
    // randomize tests
    await contacPage.fillTheForm(
      
      randomUser['name'],
      randomUser['email'],
      randomUser['phone'],
      randomUser['website']
    
      // contacPage.randomizeComponent().randomName, 
      // faker.internet.email(), 
      // contacPage.randomizeComponent().randomPhoneNumber,
      // contacPage.randomizeComponent().randomMessage
      ); 

    // add a soft assertion
    // await expect.soft(page.locator('.contact-message textarea')).toHaveText("Fail test message")

    // click submit
    await contacPage.clickBtn();

    // expect(test.info().errors.length).toBeLessThan(1)

    // verify success message
    await expect(contacPage.successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
  
  });
});