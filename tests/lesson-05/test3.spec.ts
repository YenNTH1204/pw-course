import { test, expect } from '@playwright/test';

test('test3', async ({ page }) => {
    test.setTimeout(300000);

    await test.step('Mở trang web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });

    await page
        .locator('//a[contains(text(),"Bài học 3: Todo page")]')
        .click();

    const newTaskInput = page.locator('#new-task');
    const addTaskButton = page.locator('#add-task');
    const taskRows = page.locator('li');

    // Tạo 100 task
    for (let i = 1; i <= 100; i++) {
        await newTaskInput.fill(`To do ${i}`);
        await addTaskButton.click();
    }

    await expect(taskRows).toHaveCount(100);

    // Chỉ đăng ký xử lý dialog một lần
    page.on('dialog', async (dialog) => {
        await dialog.accept();
    });

    // Xóa các task có số lẻ
    for (let i = 99; i >= 1; i -= 2) {
        const taskRow = page
            .locator('li')
            .filter({
                has: page.getByText(`To do ${i}`, {
                    exact: true,
                }),
            });

        await taskRow
            .getByRole('button', {
                name: 'Delete',
                exact: true,
            })
            .click();
    }

    // Kiểm tra chỉ còn 50 task số chẵn
    await expect(taskRows).toHaveCount(50);
});