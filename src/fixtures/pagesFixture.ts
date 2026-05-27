import { test as base } from "../fixtures/baseFixture";
import {
  LoginPage,
  NavbarPage,
  ProductsDetailsPage,
  ProductsPage,
} from "../pages/index";

type MyFixtures = {
  loginPage: LoginPage;
  navbarPage: NavbarPage;
  productsPage: ProductsPage;
  productsDetailsPage: ProductsDetailsPage;
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

  productsDetailsPage: async ({ page }, use) => {
    await use(new ProductsDetailsPage(page));
  },
});

export const expect = test.expect;
