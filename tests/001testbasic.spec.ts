import { test, expect } from '../pages/base';
import { faker } from '@faker-js/faker';
//import path from 'path';
import fs from 'fs';

// Reading from json
const jsonUserPath = "testdata/users.json";
const loginData: any = JSON.parse(fs.readFileSync(jsonUserPath, 'utf-8'));
//
const jsonDataPath = "testdata/data.json";
const testData: any = JSON.parse(fs.readFileSync(jsonDataPath, 'utf-8'));

/*test.beforeEach(async ({ page }) => {
  // Navigate to the demo webshop before each test
  await page.goto('https://demowebshop.tricentis.com/');

});*/

for (const { Username, FirstName, LastName, email, password } of loginData) {
  test(`JSON Register ${Username} test`, async ({ page, demoWebShopPage, demoWebShopRegisterPage }) => {
    // Navigate to the demo webshop
    await demoWebShopPage.gotoDemoWebShop();

    // Navigate to the register page and perform registration
    await demoWebShopRegisterPage.navigateToDemoWebShopRegister();
    await demoWebShopRegisterPage.setMaleRadioButton();
    await demoWebShopRegisterPage.setFirstNameField(FirstName);
    await demoWebShopRegisterPage.setLastNameField(LastName);
    await demoWebShopRegisterPage.setEmailField(email);
    await demoWebShopRegisterPage.setPasswordField(password);
    await demoWebShopRegisterPage.setConfirmPasswordField(password);
    await demoWebShopRegisterPage.clickRegisterButton();
    await page.waitForTimeout(5000);

  });
};

test.only('Basic search test', {tag :['@PlaywrightWithJenkins']}, async ({ page, demoWebShopPage, demoWebShopSearchPage }) => {
  // Navigate to the demo webshop, perform a search.
  await demoWebShopPage.gotoDemoWebShop();
  console.log(testData[1].searchLaptopValue);
  await demoWebShopPage.setSearchField(testData[0].searchComputerValue);
  await demoWebShopPage.confirmSearch();
  //await page.waitForTimeout(4000);

  // Assertions
  await expect(demoWebShopSearchPage.getSearchField()).resolves.toContain(testData[0].searchComputerValue);
  (await demoWebShopSearchPage.getSearchResultFieldItemTexts(testData[0].searchComputerValue)).forEach((itemText) => {
    expect(itemText.toLowerCase()).toContain(testData[0].searchComputerValue.toLowerCase());
  }
  );
});

test('Random Register test', async ({ page, demoWebShopRegisterPage, demoWebShopPage }) => {
  // Navigate to the demo webshop
  await demoWebShopPage.gotoDemoWebShop();

  // Navigate to the register page and perform registration with random data
  const password = 'test123';
  await demoWebShopRegisterPage.navigateToDemoWebShopRegister();
  await demoWebShopRegisterPage.setMaleRadioButton();
  await demoWebShopRegisterPage.setFirstNameField(faker.internet.username());
  await demoWebShopRegisterPage.setLastNameField(faker.internet.username());
  await demoWebShopRegisterPage.setEmailField(faker.internet.email());
  await demoWebShopRegisterPage.setPasswordField(password);
  await demoWebShopRegisterPage.setConfirmPasswordField(password);
  await demoWebShopRegisterPage.clickRegisterButton();
  await page.waitForTimeout(2000);

  // Assertions
  await expect(demoWebShopRegisterPage.getRegisterConfirmText()).resolves.toContain(testData[0].Register);
  await demoWebShopRegisterPage.clickContinueButton();
  await expect(demoWebShopPage.logoutLink).toHaveText(testData[0].LogOut);

});

for (let i = 0; i < loginData.length; i++) {
  test(`Basic Login ${loginData[i].Username} test`, async ({ page, demoWebShopPage, demoWebShopLoginPage }) => {
    // Navigate to the demo webshop
    await demoWebShopPage.gotoDemoWebShop();

    // Navigate to the login page and perform login
    await demoWebShopLoginPage.navigateToDemoWebShopLogin();
    await demoWebShopLoginPage.setEmailField(loginData[i].email);
    await demoWebShopLoginPage.setPasswordField(loginData[i].password);
    await demoWebShopLoginPage.clickLoginButton();
    await page.waitForTimeout(2000);

    // Assertions
    await expect(demoWebShopPage.getLogedInUserLinkValue()).resolves.toContain(loginData[i].email);
    await expect(demoWebShopPage.getLogoutLinkValue()).resolves.toContain(testData[0].LogOut);
  });
};