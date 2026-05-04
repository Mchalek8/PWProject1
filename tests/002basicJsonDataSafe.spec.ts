import { test, expect } from '../pages/base';

test('Navigate to books page JsonDataSafe', {tag :['@sanity', '@regression']}, async ({ page, demoWebShopPage, demoWebShopSearchPage, demoWebShopBooksPage, testDataRoot }) => {
  // Navigate to the demo webshop, perform a search.
  await demoWebShopPage.gotoDemoWebShop();
  await demoWebShopPage.gotoBooksPage();
  await page.waitForTimeout(1000);

  // Select sort by A-Z option perPage 4, list and grid
  await demoWebShopBooksPage.selectSortByDropDown(String(testDataRoot.moduleTestData.bookHeader.sortBy.nameAZ));
  await demoWebShopBooksPage.selectDisplayPerPageDropDown(String(testDataRoot.moduleTestData.bookHeader.displayPerPage.four));
  await demoWebShopBooksPage.selectViewAsDropDown(String(testDataRoot.moduleTestData.bookHeader.viewAs.list));
  await demoWebShopBooksPage.selectViewAsDropDown(String(testDataRoot.moduleTestData.bookHeader.viewAs.grid));
  await page.waitForTimeout(2000);

  // Return number of products in grid
  const numberOfProducts = await demoWebShopBooksPage.countOfGridProducts();
  console.log('Number of products in grid: ' + numberOfProducts);

  console.log("Navigate to books page JsonDataSafe test was executed.");
});

test('Check Top Menu Links Texts JsonDataSafe', {tag :['@regression']}, async ({ page, demoWebShopPage, testDataRoot }) => {
  // Navigate to the demo webshop, perform a search.
  await demoWebShopPage.gotoDemoWebShop();
  //await page.waitForTimeout(4000);

  // Assertions
  await expect(demoWebShopPage.getBooksTopMenText()).resolves.toContain(String(testDataRoot.moduleTestData.headerMenu.books));
  await expect(demoWebShopPage.getComputersTopMenText()).resolves.toContain(String(testDataRoot.moduleTestData.headerMenu.computers));
  await expect(demoWebShopPage.getElectronicsTopMenText()).resolves.toContain(String(testDataRoot.moduleTestData.headerMenu.electronics));

  console.log("Check Top Menu Links Texts JsonDataSafe Test was executed.");
});
