import { expect } from "@playwright/test";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  constructor(page) {
    super(page, "/login");
    this.emailAddressField = page.locator('//input[@data-qa="login-email"]');
    this.passwordField = page.getByPlaceholder("Password");
    this.loginBtn = page.getByRole("button", { name: "Login" });
    this.errorMessage = page.getByText("Your email or password is incorrect!");
  }

  async fillLoginForm(email, password) {
    await this.emailAddressField.fill(email);
    await this.passwordField.fill(password);
  }

  async submitLoginForm(email, password) {
    await this.fillLoginForm(email, password);
    await expect(this.emailAddressField).toHaveValue(email);
    await expect(this.passwordField).toHaveValue(password);
    await this.loginBtn.click();
  }

}
