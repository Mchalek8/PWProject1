import {test as base} from '@playwright/test';
import { DemoWebShopLogin } from './DemoWebShopLogin';
import { DemoWebShop } from './DemoWebShop';
import { DemoWebShopRegister } from './DemoWebShopRegiser';
import { DemoWebShopSearch } from './DemoWebShopSearch';

type MyFixtures = {
    demoWebShopLoginPage: DemoWebShopLogin;
    demoWebShopPage: DemoWebShop;
    demoWebShopRegisterPage: DemoWebShopRegister;
    demoWebShopSearchPage: DemoWebShopSearch;
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
    }
});

export { expect } from '@playwright/test';