import { user } from "../../src/data/users.js";
import { USER_STORAGE_STATE_PATH } from "../../src/data/constant.js";
import { test as setup, expect } from "@playwright/test";
import HomePage from "../../src/pageObject/HomePage.js";
import LoginPage from "../../src/pageObject/LoginPage.js";

setup("Login and save state", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  homePage.navigateToPage();
  await page.waitForTimeout(5000);
  homePage.header.clickLoginSignInBtn();
  loginPage.submitLoginForm(user.email, user.validPassword);

  await expect(homePage.header.logoutBtn).toBeVisible({ timeout: 8000 });

  await page.waitForTimeout(5000);

  await page.context().storageState({
    path: USER_STORAGE_STATE_PATH,
  });

});
