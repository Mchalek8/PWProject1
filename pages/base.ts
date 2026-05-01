import {test as base} from '@playwright/test';
import { DemoWebShopLogin } from './DemoWebShopLogin';
import { DemoWebShop } from './DemoWebShop';
import { DemoWebShopRegister } from './DemoWebShopRegiser';
import { DemoWebShopSearch } from './DemoWebShopSearch';
import { DemoWebShopBooks } from './DemoWebShopBooks';
import { TestDataRoot } from '../interface/ModuleTestData.interface';
import { loadTestData } from '../utils/JsonHelper';

type MyFixtures = {
    demoWebShopLoginPage: DemoWebShopLogin;
    demoWebShopPage: DemoWebShop;
    demoWebShopRegisterPage: DemoWebShopRegister;
    demoWebShopSearchPage: DemoWebShopSearch;
    demoWebShopBooksPage: DemoWebShopBooks;
    testDataRoot: TestDataRoot;

}

export const test = base.extend<MyFixtures>({
    demoWebShopPage: async ({page}, use) => {
        await use(new DemoWebShop(page));
    },

    demoWebShopLoginPage: async ({page}, use) => {
        await use(new DemoWebShopLogin(page));
    },

    demoWebShopRegisterPage: async ({page}, use) => {
        await use(new DemoWebShopRegister(page));
    },

    demoWebShopSearchPage: async ({page}, use) => {
        await use(new DemoWebShopSearch(page));
    },

    demoWebShopBooksPage: async ({page}, use) => {
        await use(new DemoWebShopBooks(page));
    },

    testDataRoot: async ({}, use) => {
        await use(await loadTestData());
    }
});

export { expect } from '@playwright/test';