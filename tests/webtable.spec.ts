import {test,expect} from '@playwright/test'

test('webtable',async({page})=>{
    
    await page.goto("https://letcode.in/table")

    const table = page.locator("#shopping")
    const tbody=table.locator("tbody")
    const tfoot = table.locator("tfoot")

    const rowsCOunt = await tbody.locator("tr").count();
    expect(rowsCOunt).toBe(4);

    let total =0;

    for (let i = 0; i < rowsCOunt; i++) {
        const row = tbody.locator("tr").nth(i);
        const price=await row.locator("td").last().textContent();
        total += Number(price);
        
    }
    const actualValue =await tfoot.locator("td").last().textContent();
    expect(Number(actualValue)).toBe(total);

    console.log(actualValue,total);
    
});