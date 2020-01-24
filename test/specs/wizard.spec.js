const assert = require("assert");

describe("CWL QA site", () => {
  const url = "https://cwl.orcaconnect.com";
  xit("should have the right title", async () => {
    await browser.url(url);
    const title = await browser.getTitle();
    assert.strictEqual(
      title,
      "Conversion Whale | A Result Driven Marketing Company Exclusively For The Dental Industry"
    );
  });
});
