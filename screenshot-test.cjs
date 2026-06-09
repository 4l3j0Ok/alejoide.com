const { firefox } = require("@playwright/test");

(async () => {
  const browser = await firefox.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:4322");
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: "screenshot.png", fullPage: true });
  await browser.close();
  console.log("Screenshot saved to screenshot.png");
})();
