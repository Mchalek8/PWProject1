import { Locator, Page, expect } from "@playwright/test";

export class DemoWebShopSearch {
    readonly page: Page;
    readonly searchField: Locator;
    readonly advancedSearchCheckBox: Locator;
    readonly searchButton: Locator;
    readonly searchResultFieldItems: Locator;



    constructor(page: Page) {
        this.page = page;
        this.searchField = page.locator("#Q");
        this.advancedSearchCheckBox = page.locator("#As");
        this.searchButton = page.locator("input[class='button-1 search-button']");
        this.searchResultFieldItems = page.locator(".product-grid .product-item");
    }

    //async navigateToDemoWebShopLogin(): Promise<void> {
    //    await this.openLoginLink.click();
    //}

    async setSearchField(searchTerm: string): Promise<void> {
        await this.searchField.fill(searchTerm);
    }

    async getSearchField(): Promise<string> {
        return await this.searchField.inputValue();
    }

    async clickAdvancedSearchCheckBox(): Promise<void> {
        await this.advancedSearchCheckBox.click();
    }

    async clickSearchButton(): Promise<void> {
        await this.searchButton.click();
    }

    async getSearchResultFieldItemTexts(searchTerm: string): Promise<string[]> {
        const resultItems = await this.searchResultFieldItems.count();
        const itemTexts: string[] = [];

        for (let i = 0; i < resultItems; i++) {
            const itemText = await this.searchResultFieldItems.nth(i).textContent();
            const itemTextsArrays:string[] = itemText ? itemText.split('\n').map(text => text.trim()).filter(text => text.length > 0) : [];
            const itemTextsArraysString = itemTextsArrays.toString();
            itemTexts.push(itemTextsArraysString);
        }
        //console.log(itemTexts);  
        return itemTexts;
    }

    };