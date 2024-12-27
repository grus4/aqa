import { test, expect } from "../src/myFixtures/myFixtures.js";
import { user } from "../src/data/users";

test.describe("Login feature", () => {

  test.beforeEach("Open Home page", async ({ page, homePage }) => {
    homePage.navigateToPage();
    await page.waitForTimeout(5000);
    //homePage.header.clickLoginSignInBtn();
  });

  test("Login with valid data @login", async ({ loginPage, homePage }) => {
    // loginPage.submitLoginForm(user.email, user.validPassword);
    await expect(homePage.header.logoutBtn).toBeVisible({ timeout: 8000 });
  });
  
  test("Login with valid data2 @login", async ({ loginPage, homePage }) => {
    // loginPage.submitLoginForm(user.email, user.validPassword);
    await expect(homePage.header.logoutBtn).toBeVisible({ timeout: 8000 });
  });

  test("Login with valid data3 @login", async ({ loginPage, homePage }) => {
    // loginPage.submitLoginForm(user.email, user.validPassword);
    await expect(homePage.header.logoutBtn).toBeVisible({ timeout: 8000 });
  });

  test("Login with invalid data @login", async ({ loginPage }) => {
    loginPage.submitLoginForm(user.email, user.invalidPassword);

    await expect(loginPage.errorMessage).toBeVisible({ timeout: 8000 });
  });
});
