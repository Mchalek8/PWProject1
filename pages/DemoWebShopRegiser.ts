import { Locator, Page, expect } from "@playwright/test";

export class DemoWebShopRegister {
    readonly page: Page;
    readonly openRegisterLink: Locator;
    readonly maleRadioButton: Locator;
    readonly femaleRadioButton: Locator;
    readonly firstNameField: Locator;
    readonly lastNameField: Locator;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly confirmPasswordField: Locator;
    readonly registerButton: Locator;
    readonly registerConfirmText: Locator;


    constructor(page: Page) {
        this.page = page;
        this.openRegisterLink = page.getByRole('link', { name: 'Register' });
        this.maleRadioButton = page.getByRole('radio', { name: 'Male', exact: true });
        this.femaleRadioButton = page.getByRole('radio', { name: 'Female' });
        this.firstNameField = page.getByRole('textbox', { name: 'First name:' });
        this.lastNameField = page.getByRole('textbox', { name: 'Last name:' });
        this.emailField = page.getByRole('textbox', { name: 'Email:' });
        this.passwordField = page.getByRole('textbox', { name: 'Password:', exact: true });
        this.confirmPasswordField = page.getByRole('textbox', { name: 'Confirm password:' });
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.registerConfirmText = page.locator('h1');
    }

    async navigateToDemoWebShopRegister(): Promise<void> {
        await this.openRegisterLink.click();
    }

    async setMaleRadioButton(): Promise<void> {
        await this.maleRadioButton.click();
    }

    async setFemaleRadioButton(): Promise<void> {
        await this.femaleRadioButton.click();
    }

    async setFirstNameField(firstName: string): Promise<void> {
        await this.firstNameField.fill(firstName);
    }

    async setLastNameField(lastName: string): Promise<void> {
        await this.lastNameField.fill(lastName);
    }

    async setEmailField(email: string): Promise<void> {
        await this.emailField.fill(email);
    }

    async setPasswordField(password: string): Promise<void> {
        await this.passwordField.fill(password);
    }

    async setConfirmPasswordField(confirmPassword: string): Promise<void> {
        await this.confirmPasswordField.fill(confirmPassword);
    }

    async clickRegisterButton(): Promise<void> {
        await this.registerButton.click();
    }

    async clickContinueButton(): Promise<void> {
        await this.page.getByRole('button', { name: 'Continue' }).click();
    }

    async getRegisterConfirmText(): Promise<string> {
        return await this.registerConfirmText.textContent() || '';
    }
}