import Header from "../component/Header.js";

export default class BasePage {
  constructor(page, url) {
    this.page = page;
    this.url = url;
    this.header = new Header(page);
  }

  async navigateToPage() {
    await this.page.goto(this.url);

  }
}
