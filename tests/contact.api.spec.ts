import { test, expect, APIRequestContext, APIResponse } from '@playwright/test';
import ContactPage from '../pages/contact.page';
import RandomzeComponent from '../pages/component/randomize.component';
import { faker } from '@faker-js/faker';
import apiControler from '../controller/api.controler';

test.describe('Contact', () => {
let contacPage: ContactPage;
let randomUser: APIResponse; 
// let randomizePage: RandomzeComponent; - this part of code we use in secound test descibe as example of usage
// let fakerApi: APIRequestContext; - this part of code we use in first test descibe as example of usage



test.beforeAll(async () => {

  await apiControler.init();
  randomUser = await apiControler.getUsers();
  const newUSerTodo = await apiControler.createUserToDo({ "title": "Learn Playwright", "completed": "false"});
  console.log(newUSerTodo);

//   fakerApi = await playwright.request.newContext({
    
//     baseURL: 'https://jsonplaceholder.typicode.com/'
//   });

//   const response = await fakerApi.get('users');
//   const responseBody = await response.json();
//   randomUser = responseBody[0];

//   const postResponse = await fakerApi.post('users/1/todos', {
//     data: {
//       "title": "Learn Playwright",
//       "completed": "false"
//     }
// });
//    const postResponseBody = await postResponse.json();
//    console.log(postResponseBody);
   
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