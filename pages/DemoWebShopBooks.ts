import { Locator, Page, expect } from "@playwright/test";

export class DemoWebShopBooks {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly booksText: Locator;
    readonly sortByDropDown: Locator;
    readonly productGrid: Locator;
    readonly displayPerPageDropDown: Locator;
    readonly viewAsDropDown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByRole('link', { name: 'Home' })
        this.booksText = page.getByRole('heading', { name: 'Books' });
        this.sortByDropDown = page.locator('#products-orderby');
        this.productGrid = page.locator('.product-grid .item-box');
        this.displayPerPageDropDown = page.locator('#products-pagesize');
        this.viewAsDropDown = page.locator('#products-viewmode');
    }

    async navigateToDemoWebShop(): Promise<void> {
        await this.homeLink.click();
    }

    // Drobdowns Sort By
    async selectSortByDropDown(value:string): Promise<void> {
        await this.sortByDropDown.selectOption({ label: `${value}` });
    }

    // Drobdowns Display per page
    async selectDisplayPerPageDropDown(value:string): Promise<void> {
        await this.displayPerPageDropDown.selectOption({ label: `${value}` });
    }
    
    // Drobdowns View as
    async selectViewAsDropDown(value: string): Promise<void> {
        await this.viewAsDropDown.selectOption({ label: `${value}` });
    }

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