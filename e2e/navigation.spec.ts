import { expect, test } from '@playwright/test';

test('홈 페이지가 렌더링된다', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('Home Page')).toBeVisible();
});

test('네비게이션으로 페이지 이동이 된다', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'D3.js' }).click();
  await expect(page.getByText('D3.js Page')).toBeVisible();

  await page.getByRole('link', { name: 'Canvas' }).click();
  await expect(page.getByText('Canvas Page')).toBeVisible();
});

test('존재하지 않는 경로는 404 페이지를 보여준다', async ({ page }) => {
  await page.goto('/not-exist');
  await expect(page.getByText('404')).toBeVisible();
});
