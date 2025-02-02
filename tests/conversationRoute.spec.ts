import { test, expect } from '@playwright/experimental-ct-react';

test.describe('/conversations', () => {
  test('can be created via Item', async ({ page }) => {
    await page.goto('/item/97');
    await page.getByRole('button', { name: 'MESSAGE' }).click();
    await expect(
      page.locator('.conversation-height > div:nth-child(3)')
    ).toBeVisible();
  });

  test('sends message', async ({ page }) => {
    await page.goto('/conversations');
    await page.getByPlaceholder('Type your message here').click();
    await page.getByPlaceholder('Type your message here').press('CapsLock');
    await page
      .getByPlaceholder('Type your message here')
      .fill('Nice shoes test');
    await page.locator('form').getByRole('button').click();
    await expect(page.getByText('Nice shoes test')).toBeVisible();
  });

  test('displays latest messages in CurrentConversation', async ({ page }) => {
    await page.goto('/conversations');
    await page.getByPlaceholder('Type your message here').click();
    await page.getByPlaceholder('Type your message here').press('CapsLock');
    await page
      .getByPlaceholder('Type your message here')
      .fill('Displays latest message test');
    await page.locator('form').getByRole('button').click();
    await expect(
      page.locator('.conversation-height > .relative > div').first()
    ).toBeVisible();
  });

  // test('deletes an existing conversation', async ({page})=>{
  // this test is cannot be completed because deleting is not working
  // })
});
