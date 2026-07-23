import { test, expect } from '@playwright/test';

test('test2', async ({ page }) => {
    await test.step('Mở trang web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await page.locator('//a[contains(text(),"Bài học 2: Product page")]').click();

    // Add product 1
    await page
        .locator('xpath=/html/body/div[2]/div[1]/div[1]/div/button')
        .dblclick();

    // Add product 2
    await page
        .locator('xpath=/html/body/div[2]/div[1]/div[2]/div/button')
        .click({clickCount :3,});

    // Add product 3
    await page
        .locator('xpath=/html/body/div[2]/div[1]/div[3]/div/button')
        .click();

    
}
)