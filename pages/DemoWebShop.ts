import { Locator, Page } from "@playwright/test";

export class DemoWebShop {
    readonly page: Page;
    readonly searchField: Locator;
    readonly searchButton: Locator;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly logoutLink: Locator;
    readonly logedInUserLink: Locator;
    readonly booksTopMenuLink: Locator;
    readonly computersTopMenuLink: Locator;
    readonly electronicsTopMenuLink: Locator;
    


    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('#small-searchterms');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.loginLink = page.getByRole('link', { name: 'Log in' })
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
        this.logedInUserLink = page.locator('div[class="header-links"] a[class="account"]');
        this.booksTopMenuLink = page.getByRole('link', { name: 'Books' }).first();
        this.computersTopMenuLink = page.getByRole('link', { name: 'Computers' }).first();
        this.electronicsTopMenuLink = page.getByRole('link', { name: 'Electronics' }).first();
    }

    async gotoDemoWebShop(): Promise<void> {
        //await this.page.goto('https://demowebshop.tricentis.com/');
        if (process.env.TEST_EXECUTION_ENV == 'qa') {
            await this.page.goto(`${process.env.HOME_URL_QA}`);
            console.log('QA environment');
        } else if (process.env.TEST_EXECUTION_ENV == 'dev') {
            await this.page.goto(`${process.env.HOME_URL_DEV}`);
            console.log('DEV environment');
        }
    }

    async setSearchField(searchTerm: string): Promise<void> {
        await this.searchField.fill(searchTerm);
    }

    async confirmSearch(): Promise<void> {
        await this.searchButton.click();
    }

    async getRegisterLinkValue(): Promise<string> {
        return await this.registerLink.textContent() || '';
    }

    async getLoginLinkValue(): Promise<string> {
        return await this.loginLink.textContent() || '';
    }

    async getLogoutLinkValue(): Promise<string> {
        return await this.logoutLink.textContent() || '';
    }

    async getLogedInUserLinkValue(): Promise<string> {
        return await this.logedInUserLink.textContent() || '';
    }

    async getBooksTopMenText(): Promise<string> {
        return await this.booksTopMenuLink.textContent() || '';
        //return await this.booksTopMenuLink.textContent() || '';
    }

    async getComputersTopMenText(): Promise<string> {
        return await this.computersTopMenuLink.textContent() || '';
    }

    async getElectronicsTopMenText(): Promise<string> {
        return await this.electronicsTopMenuLink.textContent() || '';
    }

    // Navigation section
    async gotoBooksPage(): Promise<void> {
        await this.booksTopMenuLink.click();
    }

}