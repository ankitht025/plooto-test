// @ts-check
const { test, expect } = require('@playwright/test');
const locators = require('../pageobjects/locators')

test('plooto-smoke-test', async ({ page }) => {
  await test.step('1. navigate to home page', async () => {
    await page.goto('/login.html');
    await page.locator(locators.btnSignIn).click();
  })

  await test.step('2. list of companies and their status', async () => {
    await expect(page).toHaveURL(/.*company_select/);
    await expect(page.locator(locators.companyName)).toBeVisible();
    await expect(page.locator(locators.companyStatus)).toBeVisible();
    await expect(page.locator(locators.outstandingStatus)).toBeVisible();
  })

  await test.step('3. company status and actionable items page', async () => {
    await page.locator(locators.selectCompany).click();
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator(locators.paymentApprovalsTab)).toBeVisible();
    await expect(page.locator(locators.pendingPaymentsTab)).toBeVisible();
  })

  await test.step('4. single payment validation that requires user approval', async () => {
    await page.locator(locators.paymentApprovalsTab).click();
    await expect(page).toHaveURL(/.*payment_approvals/);
    await expect(await page.locator(locators.singlePayment).count()).toEqual(1);
  })

  await test.step('5. verify the ongoing payments page is displayed and navigate to "Cavages" payment approval page', async () => {
    await page.locator(locators.pendingPaymentsTab).click();
    await expect(page).toHaveURL(/.*pending_payments/);
    await expect(page.locator(locators.pendingPaymentTitle)).toBeVisible();
    await expect(await page.locator(locators.pendingPayablesTab).innerText()).toMatch(/Pending Payables \(\d+\)/)
    await expect(await page.locator(locators.pendingReceiveAblesTab).innerText()).toMatch(/Pending Receivables \(\d+\)/)
    await page.locator(locators.paymentCavages).click();
    await expect(page).toHaveURL(/.*payment_approval/);
  })

  await test.step('6. details about the payment, approval process and audit trail', async () => {
    await expect(await page.locator(locators.contactDetails).textContent()).toContain('Cavages')
    await expect(await page.locator(locators.paymentStatus).textContent()).toContain('On Hold')
    await expect(page.locator(locators.paymentApprovalHistrory)).toBeVisible();
    await expect(page.locator(locators.auditTrail)).toBeVisible();
  })
});
