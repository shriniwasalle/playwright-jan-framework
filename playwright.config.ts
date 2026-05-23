import { defineConfig, devices } from "@playwright/test";
import {
  FULLY_PARALLEL,
  HEADLESS,
  RETRIES,
  SCREENSHOT_MODE,
  SLOW_MO,
  TRACE_MODE,
  VIDEO_MODE,
  WORKERS,
} from "./src/config/constants/frameworkConstants";
import { REPORTER_CONFIG } from "./src/config/constants/reportConstants";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: FULLY_PARALLEL,
  retries: RETRIES,
  workers: WORKERS,
  reporter: REPORTER_CONFIG,

  use: {
    headless: HEADLESS,
    screenshot: SCREENSHOT_MODE,
    video: VIDEO_MODE,
    trace: TRACE_MODE,
    viewport: null,

    launchOptions: {
      args: ["--start-maximized"],
      slowMo: SLOW_MO, // To slow down the actions
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    // {
    //   name: "firefox",
    //   use: { ...devices["Desktop Firefox"] },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },
  ],
});
