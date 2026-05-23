import { test, expect } from "../../src/fixtures/pagesFixture";
import { currentEnv } from "../../src/config/env";

test("verify login with valid credentials", async ({
  loginPage,
  navbarPage,
}) => {
  await navbarPage.clickNavbarItem("Login");
  await loginPage.loginToApp(currentEnv.emailAddress, currentEnv.password);
  const isLogoutButtonVisible = await navbarPage.isNavbarVisible("Logout");
  expect(isLogoutButtonVisible).toBeTruthy();
});
