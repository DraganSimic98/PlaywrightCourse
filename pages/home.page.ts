import{Page, Locator} from '@playwright/test';

class HomePage{
page: Page;
   
    getStartetBtn: Locator;
    headingText: Locator;
    homeLink: Locator;
    homeText: Locator;
    homeSelect: Locator;
    searchIcon: Locator;
    navLinks: Locator;
    openAboutPage: Locator;

constructor(page: Page){
this.page=page;

this.getStartetBtn = page.locator('*#get-started');
this.headingText = page.locator('text=Think different. Make different.');

this.homeLink = page.locator('#zak-primary-menu >> text=Home');
this.homeText = page.locator('#zak-primary-menu:has-text("Home")');
this.homeSelect = page.locator('//*[@id="menu-item-489"]/a');

this.searchIcon = page.locator('//*[@id="zak-masthead"]/div/div/div/div[2]/div[1]/div[1]/a');
this.navLinks = page.locator('#zak-primary-menu li[id*=menu]');

this.openAboutPage = page.locator('//*[@id="menu-item-491"]/a');
}

async navigation(){
    await this.page.goto('/');
}
getNavLinksText(){
    return this.navLinks.allTextContents();
}

async clickOnNavBarElement(el: Locator){
    await el.click();
}

}

export default HomePage;