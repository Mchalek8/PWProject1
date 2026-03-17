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

// Minor to git

test('Basic search test2', {tag :['@sanity', '@regression']}, async ({ page, demoWebShopPage, demoWebShopSearchPage }) => {
  // Navigate to the demo webshop, perform a search.
  await demoWebShopPage.gotoDemoWebShop();
  await demoWebShopPage.setSearchField(testData[0].searchComputerValue);
  await demoWebShopPage.confirmSearch();
  //await page.waitForTimeout(4000);

  // Assertions
  await expect(demoWebShopSearchPage.getSearchField()).resolves.toContain(testData[0].searchComputerValue);
  (await demoWebShopSearchPage.getSearchResultFieldItemTexts(testData[0].searchComputerValue)).forEach((itemText) => {
    expect(itemText.toLowerCase()).toContain(testData[0].searchComputerValue.toLowerCase());
  }
  );
  console.log("Basic search test was executed.2");
});

test('Check Top Menu Links Texts2', {tag :['@regression']}, async ({ page, demoWebShopPage }) => {
  // Navigate to the demo webshop, perform a search.
  await demoWebShopPage.gotoDemoWebShop();
  //await page.waitForTimeout(4000);

  // Assertions
  await expect(demoWebShopPage.getBooksTopMenText()).resolves.toContain(testData[0].booksTopMenText);
  await expect(demoWebShopPage.getComputersTopMenText()).resolves.toContain(testData[0].computersTopMenText);
  await expect(demoWebShopPage.getElectronicsTopMenText()).resolves.toContain(testData[0].electronicsTopMenText);

  console.log("Check Top Menu Links Texts Test was executed.2");
});
