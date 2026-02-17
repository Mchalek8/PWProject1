import { Locator, Page } from "@playwright/test";

export class DemoWebShop {
    readonly page: Page;
    readonly searchField: Locator;
    readonly searchButton: Locator;
    readonly registerLink: Locator;
    readonly loginLink: Locator;
    readonly logoutLink: Locator;
    readonly logedInUserLink: Locator;


    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator('#small-searchterms');
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.registerLink = page.getByRole('link', { name: 'Register' });
        this.loginLink = page.getByRole('link', { name: 'Log in' })
        this.logoutLink = page.getByRole('link', { name: 'Log out' });
        this.logedInUserLink = page.locator('div[class="header-links"] a[class="account"]');
    }

    async gotoDemoWebShop(): Promise<void> {
        await this.page.goto('https://demowebshop.tricentis.com/');
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
}