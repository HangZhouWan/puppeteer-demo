describe('Google homepage', () => {
  beforeAll(async () => {
    // const filePath = 'C:/N-20W1PF3MBZLW-Data/qichang/Desktop/demo/demo.html'
    // await page.goto(`file://${filePath}`, { waitUntil: 'domcontentloaded' });
  });

  it('should display "Google" in title', async () => {
    await page.goto(`https://google.com`, { waitUntil: 'domcontentloaded' });
    await expect(page.title()).resolves.toMatch('Demo Page');
  });
});
