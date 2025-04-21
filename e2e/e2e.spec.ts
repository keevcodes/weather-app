import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("has title of Weather App", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Weather App/);
});

test.describe("Check the main elements on the weather card section", () => {
  test("should have a h4 tag with Grahamstown, South Africa", async ({
    page
  }) => {
    const h3 = page.locator("h3");
    await expect(h3).toHaveText("Grahamstown, South Africa");
  });

  test("should have the feels like weather highlight", async ({ page }) => {
    await expect(page.getByText("Feels like")).toBeVisible();
  });

  test("should have the humidity weather highlight", async ({ page }) => {
    await expect(page.getByText("Humidity")).toBeVisible();
  });

  test("should have the wind weather highlight", async ({ page }) => {
    await expect(page.getByText("Wind")).toBeVisible();
  });
});

test.describe("Check the main elements of the forecast section are visible", () => {
  test("should have seven list items for the forecast", async ({ page }) => {
    const forecastList = page.locator("ul li");
    await expect(forecastList).toHaveCount(7);
  });
});
