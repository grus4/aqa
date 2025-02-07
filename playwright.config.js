// @ts-check
import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
dotenv.config({
  path: "./env"
})

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = defineConfig({
  testMatch: "/tests/**/*spec.js",
  testIgnore: "/tests/**/*skip.js",
  // globalSetup: "./globalSetup.js",
  // globalTeardown: "./globalTearDown.js",
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: false,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    headless: false,
    baseURL: "https://automationexercise.com",

    screenshot: "only-on-failure",
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "retain-on-failure",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "setup:stg",
      use: {
        ...devices["Desktop Chrome"],
      },
      testMatch: "/tests/setup/**/*setup.js",
    },

    // {
    //   name: "teardown:stg",
    //   use: {
    //     ...devices["Desktop Chrome"],
    //   },
    //   testMatch: "/tests/teardown/**/*tearDown.js",
    // },

    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },

      dependencies: ["setup:stg"],

      //teardown: "teardown:stg",
    },

    // {
    //   name: "dev",
    //   use: {
    //     ...devices["Desktop Firefox"],
    //   },
    // },

    // {
    //   name: "webkit",
    //   use: { ...devices["Desktop Safari"] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    //  {
    //    name: 'Mobile Safari',
    //    use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

export default config;
