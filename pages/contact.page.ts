import{Page, Locator} from "@playwright/test";
import RandomzeComponent from "./component/randomize.component";

class ContactPage{
    page: Page;
    submitbtn: Locator;
    successAlert: Locator;
    emailInput: Locator;
    nemaInput: Locator;
    phoneInput: Locator;
    messageTextArea: Locator;

    constructor(page: Page){
        this.page = page;
        this.submitbtn =  page.locator('button[type=submit]');
        this.successAlert = page.locator('div[role="alert"]');
        this.nemaInput = page.locator('.contact-name input');
        this.emailInput = page.locator('.contact-email input');
        this.phoneInput = page.locator('.contact-phone input');
        this.messageTextArea = page.locator('.contact-message textarea');
    }

    async navigate(){
        await this.page.goto('/contact');
    }

    async fillTheForm(name: string, email: string, phone: string, message: string){
        await this.nemaInput.fill(name)
        await this.emailInput.fill(email)
        await this.phoneInput.fill(phone)
        await this.messageTextArea.fill(message)
    }

    async clickBtn(){
        await this.submitbtn.click()
    }

    randomizeComponent(){
        return new RandomzeComponent(this.page);
    }
}

export default ContactPage;