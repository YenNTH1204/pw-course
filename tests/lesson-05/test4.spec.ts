import { test, expect } from '@playwright/test';

test('test3', async ({ page }) => {
    test.setTimeout(300000);

    await test.step('Mở trang web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await page
        .locator('//a[contains(text(),"Bài học 4: Personal notes")]')
        .click();

    const newTitleInput = page.locator('#note-title');
    const newContentInput = page.locator('#note-content');
    const addNoteButton = page.locator('#add-note');
    const searchButton = page.locator('#search');

    // Tạo 100 task
    for (let i = 1; i <= 10; i++) {
        await newTitleInput.fill(`Create new note ${i}`);
        if (i % 2 === 0) {
            await newContentInput.fill(`Content so chan ${i}`);
        } else
            await newContentInput.fill(`Content so le ${i}`);
        await addNoteButton.click();
    }

    // Tìm kiếm
    const searchInput = page.locator('#search');
    await searchInput.fill('một hoặc nhiều');
    await expect(searchInput).toHaveValue('một hoặc nhiều');


})