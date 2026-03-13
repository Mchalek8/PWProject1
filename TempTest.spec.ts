import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/');
  await page.getByRole('link', { name: 'Books' }).first().click();
  await page.getByRole('link', { name: 'Computers' }).first().click();
  await page.getByRole('link', { name: 'Electronics' }).first().click();
  await page.getByRole('link', { name: 'Apparel & Shoes' }).first().click();
  await page.getByRole('link', { name: 'Digital downloads' }).first().click();
  await page.getByRole('link', { name: 'Jewelry' }).first().click();
  await page.getByRole('link', { name: 'Gift Cards' }).first().click();
  await page.getByRole('link', { name: 'Books' }).first().click();
  await expect(page.locator('body')).toContainText('Books');
  await expect(page.getByRole('link', { name: 'Computers' }).first()).toBeVisible();
  await expect(page.locator('body')).toContainText('Computers');
  await expect(page.locator('body')).toContainText('Electronics');
  await expect(page.locator('body')).toContainText('Apparel & Shoes');
  await expect(page.locator('body')).toContainText('Digital downloads');
  await expect(page.locator('body')).toContainText('Jewelry');
  await expect(page.locator('body')).toContainText('Gift Cards');
});