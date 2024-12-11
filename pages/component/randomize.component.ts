import{Page, Locator} from '@playwright/test';
import { faker } from '@faker-js/faker';

class RandomzeComponent{
    page: Page;
    randomName: string;
    randomEmail: string;
    randomPhoneNumber: string;
    randomMessage: string;

    constructor(page: Page){
        this.page = page;
         this.randomName = faker.person.fullName(); // Rowan Nikolaus
         this.randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
         this.randomPhoneNumber = faker.phone.number({style: 'human'});
         this.randomMessage = faker.lorem.sentence(10);
    } 
}

export default RandomzeComponent;