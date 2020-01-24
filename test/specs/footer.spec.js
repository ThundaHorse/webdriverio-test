const assert = require("assert");

describe("Wizard footer link tests", () => {
  beforeEach(async function() {
    const url = "https://cwl.orcaconnect.com";
    await browser.url(url);
  });

  it("should direct service link to service page", async () => {
    let serviceLink = await $("a=Services");
    assert(
      serviceLink.getAttribute("href"),
      "https://cwl.orcaconnect.com/services"
    );
  });

  it("should direct digital marketing to digital marketing page", async () => {
    let digMarkLink = await $("a=Digital Marketing");
    assert(
      digMarkLink.getAttribute("href"),
      "https://conversionwhale.com/digital-marketing"
    );
  });

  it("should direct direct mail to direct mail page", async () => {
    let directMailLink = await $("a=Direct Mail");
    assert(
      directMailLink.getAttribute("href"),
      "https://conversionwhale.com/direct-mail"
    );
  });

  it("should direct service packages to service packages page", async () => {
    let servicePackageLink = await $("a=Service Packages");
    assert(
      servicePackageLink.getAttribute("href"),
      "https://conversionwhale.com/packages"
    );
  });

  it("should direct technology to technology page", async () => {
    let techLink = await $("a=Technology");
    assert(
      techLink.getAttribute("href"),
      "https://conversionwhale.com/technology"
    );
  });
});
