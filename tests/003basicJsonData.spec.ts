import { test, expect } from '../pages/base';
import fs from 'fs';

const jsonDataPath = "testdata/dataNew.json";
const testData: any = JSON.parse(fs.readFileSync(jsonDataPath, 'utf-8'));

/*test.beforeEach(async ({ page }) => {
  // Navigate to the demo webshop before each test
  await page.goto('https://demowebshop.tricentis.com/');

});*/

test('Navigate to books page without data interface', {tag :['@sanity', '@regression']}, async ({ page, demoWebShopPage, demoWebShopSearchPage, demoWebShopBooksPage, testDataRoot }) => {
  // Navigate to the demo webshop, perform a search.
  await demoWebShopPage.gotoDemoWebShop();
  await demoWebShopPage.gotoBooksPage();
  await page.waitForTimeout(1000);

  // Select sort by A-Z option and display per page
  await demoWebShopBooksPage.selectSortByDropDownAZOption(testData.moduleTestData.bookHeader.sortBy.nameAZ);
  await demoWebShopBooksPage.selectdisplayPerPage(testData.moduleTestData.bookHeader.displayPerPage.four);
  await page.waitForTimeout(2000);

  // Return number of products in grid
  const numberOfProducts = await demoWebShopBooksPage.countOfGridProducts();
  console.log('Number of products in grid: ' + numberOfProducts);

});

test('Check Top Menu Links Texts without data interface', {tag :['@regression']}, async ({ page, demoWebShopPage }) => {
  // Navigate to the demo webshop, perform a search.
  await demoWebShopPage.gotoDemoWebShop();
  //await page.waitForTimeout(4000);

  // Assertions
  await expect(demoWebShopPage.getBooksTopMenText()).resolves.toContain(testData.moduleTestData.headerMenu.books);
  await expect(demoWebShopPage.getComputersTopMenText()).resolves.toContain(testData.moduleTestData.headerMenu.computers);
  await expect(demoWebShopPage.getElectronicsTopMenText()).resolves.toContain(testData.moduleTestData.headerMenu.electronics);

  console.log("Check Top Menu Links Texts Test without data interface was executed.2");
});
