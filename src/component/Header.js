export default class Header {
  constructor(page) {
    this.page = page;
    this.loginSignupBtn = page.locator('//a[@href="/login"]');
    this.logoutBtn = page.locator('//a[@href="/logout"]');
  }

  async clickLoginSignInBtn() {
    this.loginSignupBtn.click();
  }

  async clickLogoutBtn() {
    this.logoutBtn.click();
  }
}
