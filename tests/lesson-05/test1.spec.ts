import { test, expect } from '@playwright/test';

test('test1', async ({ page }) => {
    await test.step('Mở trang web', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });


    await page.locator('//a[contains(text(),"Bài học 1: Register Page (có đủ các element)")]').click();

    //Input Username
    await page.locator('//input[@id="username"]').fill('Nguyen Thi Hai Yen');

    //Input Email
    await page.locator('//input[@id="email"]').fill('yennthse0310@gmial.com');

    //Select Gender
    await page.locator('//input[@id="female"]').check();

    //Select Hobbies
    await page.locator('//input[@id="reading"]').check();
    await page.locator('//input[@id="traveling"]').check();
    await page.locator('//input[@id="cooking"]').check();

    //Select Interests
    await page.locator('//select[@id="interests"]').selectOption({ value: 'music' });

    //Select Country
    await page.locator('//select[@id="country"]').selectOption({ value: 'uk' });

    //Input Date of Birth:
    await page.locator('//input[@id="dob"]').fill('1994-04-12');

    //Input Date of Birth:
    await page.locator('//input[@id="profile"]').setInputFiles('/Users/milohau/Documents/Playwright_E101/pw-course/tests/lesson-05/profile.jpg');

    //Input Biography:
    await page.locator('#bio').fill('I am a detail-oriented and quality-driven Software QA Engineer with experience working with technical documentation, system requirements, and complex test cases. I excel at analyzing system logic, handling large-scale test data, and collaborating effectively across teams to ensure software runs smoothly and accurately before launch.');

    //Input Rate Us:
    await page.locator('#rating').evaluate((el: HTMLInputElement) => {
        el.value = '8';
        el.dispatchEvent(new Event('input', { bubbles: true }));
    });


    //Input Favorite Color:
    await page.locator('//*[@id="favcolor"]').evaluate((el: HTMLInputElement) => {
        el.value = '#00ffb3';
        el.dispatchEvent(new Event('input', { bubbles: true }));
    });

    //Select Newsletter:
    await page.locator('//*[@id="newsletter"]').check();

    // Enable Feature:
    await page.locator('//*[@id="registrationForm"]/div[13]/label[2]/span').setChecked(true);

    //Star Rating
    const rating = 4.5;
    const maxRating = 5;

    const box = await page.locator('#starRating').boundingBox();

    if (!box) {
        throw new Error('Không tìm thấy vùng Star Rating');
    }

    await page.mouse.click(
        box.x + box.width * (rating / maxRating),
        box.y + box.height / 2
    );

    //Input Custom Date:
    await page.locator('//*[@id="customDate"]').evaluate(
        (el: HTMLInputElement) => {
            el.value = '2026-07-22';

            el.dispatchEvent(new Event('input', {
                bubbles: true
            }));
        });

    await page.waitForTimeout(8000);

    //Click button Register
    await page.locator('//*[@id="registrationForm"]/div[16]/button').click();
});