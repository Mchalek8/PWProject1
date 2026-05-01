import { Locator, Page, expect } from "@playwright/test";

export class DemoWebShopBooks {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly booksText: Locator;
    readonly sortByDropDown: Locator;
    readonly productGrid: Locator
    readonly displayPerPage: Locator

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' })
        this.booksText = page.getByRole('heading', { name: 'Books' });
        this.sortByDropDown = page.locator('#products-orderby');
        this.productGrid = page.locator('.product-grid .item-box');
        this.displayPerPage = page.locator('#products-pagesize');
    }

    async navigateToDemoWebShop(): Promise<void> {
        await this.homeLink.click();
    }

    async selectSortByDropDownAZOption(value:string): Promise<void> {
        await this.sortByDropDown.selectOption({ label: `${value}` });
    }

    async selectdisplayPerPage(value:string): Promise<void> {
        await this.displayPerPage.selectOption({ label: `${value}` });
    }
    
    // async selectSortByDropDownAZOption(): Promise<void> {
    //     await this.sortByDropDown.selectOption({ label: 'Name: A to Z' });
    // }  
    
    // async selectSortByDropDownAZOption(): Promise<void> {
    //     await this.sortByDropDown.selectOption({ label: 'Name: A to Z' });
    // }      

    async countOfGridProducts(): Promise<number> {
        return await this.productGrid.count();
    }   

    // async setEmailField(email: string): Promise<void> {
    //     await this.emailField.fill(email);
    // }

    // async setPasswordField(password: string): Promise<void> {
    //     await this.passwordField.fill(password);
    // }

    // async setRememberMeCheckBox(): Promise<void> {
    //     await this.rememberMeCheckBox.click();
    // }

    // async clickLoginButton(): Promise<void> {
    //     await this.loginButton.click();
    // }
}