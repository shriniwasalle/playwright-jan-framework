import { test as base } from "@playwright/test";
import { currentEnv } from "../config/env";

export const test = base.extend({
  page: async ({ page }, use) => {
    await page.goto(currentEnv.baseUrl);
    await use(page);
  },
});

export const expect = test.expect;
