import { Locator, Page } from "@playwright/test";

export class ProductsDetailsPage {
  readonly page: Page;
  readonly productDetailsSection: Locator;
  readonly productName: Locator;
  readonly productCategory: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productDetailsSection = page.locator("[class='product-details']");
    this.productName = page.locator("div[class='product-information'] h2");
    this.productCategory = page.locator(
      "//div[@class='product-information']//p[contains(text(), 'Category:')]",
    );
  }

  async isProductsDetailsVisible(): Promise<boolean> {
    return await this.productDetailsSection.isVisible();
  }

  async isProductNameVisible(): Promise<boolean> {
    return await this.productName.isVisible();
  }

  async isProductCategoryVisible(): Promise<boolean> {
    return await this.productCategory.isVisible();
  }

  async getProductName(): Promise<string> {
    return (await this.productName.textContent()) || "";
  }

  async verifyProductDetails() {
    const productDetailsObj = {
      productName: await this.getProductName(),
      productCategory: await this.getProductName(),
    };

    return productDetailsObj;
  }
}
