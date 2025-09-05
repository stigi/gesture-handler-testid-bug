describe('Demo App', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should have demo button visible', async () => {
    await expect(element(by.id('demo-button'))).toBeVisible();
  });
});
