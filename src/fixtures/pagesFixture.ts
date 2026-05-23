import { test as base } from "../fixtures/baseFixture";
import { LoginPage, NavbarPage, ProductsPage } from "../pages/index";

type MyFixtures = {
  loginPage: LoginPage;
  navbarPage: NavbarPage;
  productsPage: ProductsPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  navbarPage: async ({ page }, use) => {
    await use(new NavbarPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export const expect = test.expect;
