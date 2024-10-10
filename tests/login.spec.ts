import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/OrangeHRM/);
  });



  test('login', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  
    // Expect a title "to contain" a substring.
    await page.locator("input[placeholder='Username']").fill("Admin")
    await page.locator("//input[@placeholder='Password']").fill("admin123")
    await page.locator("button[type='submit']").click()

  });  
  