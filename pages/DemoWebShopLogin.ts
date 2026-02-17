import { Locator, Page, expect } from "@playwright/test";
//import {faker} from '@faker-js/faker';

export class DemoWebShopLogin {
    readonly page: Page;
    readonly openLoginLink: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly rememberMeCheckBox: Locator;
    readonly loginButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.openLoginLink = page.getByRole('link', { name: 'Log in' });
        this.emailField = page.getByRole('textbox', { name: 'Email:' });
        this.passwordField = page.getByRole('textbox', { name: 'Password:' });
        this.rememberMeCheckBox = page.getByRole('checkbox', { name: 'Remember me' });
        this.loginButton = page.getByRole('button', { name: 'Log in' });
    }

    async navigateToDemoWebShopLogin(): Promise<void> {
        await this.openLoginLink.click();
    }

    async setEmailField(email: string): Promise<void> {
        await this.emailField.fill(email);
    }

    async setPasswordField(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }

    async setRememberMeCheckBox(): Promise<void> {
        await this.rememberMeCheckBox.click();
    }

    async clickLoginButton(): Promise<void> {
        await this.loginButton.click();
    }
}