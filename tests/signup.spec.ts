import{test,expect}from "@playwright/test"




test("signup",async({page})=> {
    await page.goto("https://www.linkedin.com/feed/")
    await expect(page).toHaveTitle("Feed | LinkedIn")
   

});
