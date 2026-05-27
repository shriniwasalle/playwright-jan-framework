import { Locator, Page } from "@playwright/test";

export class ProductsPage {
  readonly page: Page;
  readonly allProductsHeader: Locator;
  readonly productsList: Locator;
  readonly viewProductButtons: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allProductsHeader = page.locator("text=All Products");
    this.productsList = page.locator(".features_items");
    this.viewProductButtons = page.locator("a[href*='product_details']");
  }

  async isAllProductsHeaderVisible(): Promise<boolean> {
    return await this.allProductsHeader.isVisible();
  }

  async isProductsListVisible(): Promise<boolean> {
    return await this.productsList.isVisible();
  }

  async clickViewProductOfFirstProduct(): Promise<void> {
    await this.viewProductButtons.first().click();
  }
}
