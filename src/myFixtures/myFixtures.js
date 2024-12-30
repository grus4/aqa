import {
  test as customTest,
  expect as customExpect,
  request as apiRequest,
} from "@playwright/test";
import LoginPage from "../pageObject/LoginPage";
import HomePage from "../pageObject/HomePage";
import { USER_STORAGE_STATE_PATH } from "../data/constant.js";

export const test = customTest.extend({
  page: async ({ browser }, use) => {
    //pre-conditions
    const context = await browser.newContext({
      storageState: USER_STORAGE_STATE_PATH,
    });

    const customPage = await context.newPage();

    //test
    await use(customPage);

    //after test
    await customPage.close();
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await use(loginPage);
  },

  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await use(homePage);
  },

  request: async ({}, use) => {
    const requestCtx = await apiRequest.newContext();

    await use(requestCtx);

    await requestCtx.dispose();
  },
});

export const expect = customExpect;
