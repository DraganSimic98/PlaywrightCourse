import { Page, Locator} from "@playwright/test";

class Account {
    page: Page;
    ordersBtn: Locator;
    downloadBtn: Locator;
    loginText: Locator;
    registerText: Locator;

    constructor(page: Page){
        this.page = page;
        this.ordersBtn = page.locator('//*[@id="post-9"]/div/div/div/nav/ul/li[2]/a');
        this.downloadBtn = page.locator('//*[@id="post-9"]/div/div/div/nav/ul/li[3]/a');
        this.loginText = page.locator('//div[@class="u-column1 col-1"]/h2[text() = "Login"]');
        this.registerText = page.locator('//div[@class="u-column2 col-2"]/h2[text() = "Register"]');
    }

    async navigate(){
        await this.page.goto('/my-account');
    }
}

export default Account;