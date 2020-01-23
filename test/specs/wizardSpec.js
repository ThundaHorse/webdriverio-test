const assert = require("assert");

describe("Wizard test", () => {
  it("should have the right title", () => {
    browser.url("https://wizard.orcasandbox.com");
    // browser.url("http://localhost:3000/");
    const title = browser.getTitle();
    assert.strictEqual(title, "Wizard");
  });

  it("should find the input and fill it out", () => {
    browser.url("https://wizard.orcasandbox.com");
    // browser.url("http://localhost:3000/");
    $("input#autocomplete_business").setValue(
      "Peachtree Dental Group and Orthodontists"
    );
    const inputForm = $("input#auto_complete_business");
    const result = $("div.pac-item");
    const button = $("button#nextBtn");
    const runWizardBtn = $("button#confirmPractice");
    result.click();
    button.click();
    runWizardBtn.click();
  });
});
