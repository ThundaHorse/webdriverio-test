const assert = require("assert");

describe("Wizard footer link tests", () => {
  beforeEach(async function() {
    const url = "https://cwl.orcasandbox.com";
    await browser.url(url);
    const title = await browser.getTitle();
    assert(
      title,
      "Conversion Whale | A Result Driven Marketing Company Exclusively For The Dental Industry"
    );
  });

  it("should direct service link link to service page", async () => {
    let serviceLink = await $("a=Services");
    assert(
      serviceLink.getAttribute("href"),
      "https://cwl.orcasandbox.com/services"
    );
  });

  it("should direct digital marketing link to digital marketing page", async () => {
    let digMarkLink = await $("a=Digital Marketing");
    assert(
      digMarkLink.getAttribute("href"),
      "https://cwl.orcasandbox.com/digital-marketing"
    );
  });

  it("should direct direct mail link to direct mail page", async () => {
    let directMailLink = await $("a=Direct Mail");
    assert(
      directMailLink.getAttribute("href"),
      "https://cwl.orcasandbox.com/direct-mail"
    );
  });

  it("should direct service packages link to service packages page", async () => {
    let servicePackageLink = await $("a=Service Packages");
    assert(
      servicePackageLink.getAttribute("href"),
      "https://cwl.orcasandbox.com/packages"
    );
  });

  it("should direct technology link to technology page", async () => {
    let techLink = await $("a=Technology");
    assert(
      techLink.getAttribute("href"),
      "https://cwl.orcasandbox.com/technology"
    );
  });

  it("should direct orca platform link to orca platform page", async () => {
    let orca = await $("a=ORCA Platform");
    assert(
      orca.getAttribute("href"),
      "https://cwl.orcasandbox.com/orca-platform"
    );
  });

  it("should direct virtual assistant link to virtual assistant page", async () => {
    let virtAs = await $("a=Virtual Assistant");
    assert(
      virtAs.getAttribute("href"),
      "https://cwl.orcasandbox.com/virtual-assistant"
    );
  });

  it("should route call analysis link to call analysis page", async () => {
    let callAs = await $("a=Call Analysis");
    assert(
      callAs.getAttribute("href"),
      "https://cwl.orcasandbox.com/call-analysis"
    );
  });

  it("should route location targeting link to location targeting page", async () => {
    let locTar = await $("a=Location Targeting");
    assert(
      locTar.getAttribute("href"),
      "https://cwl.orcasandbox.com/location-targeting"
    );
  });

  it("should route testimonials link to testimonials page", async () => {
    let testimonial = await $("a=Testimonials");
    assert(
      testimonial.getAttribute("href"),
      "https://cwl.orcasandbox.com/testimonials/"
    );
  });

  it("should route case studies link to case studies page", async () => {
    let sucSt = await $("a=Case Studies");
    assert(
      sucSt.getAttribute("href"),
      "https://cwl.orcasandbox.com/case-studies"
    );
  });

  it("should route our story link to company page", async () => {
    let ourStory = await $("a=Our Story");
    assert(
      ourStory.getAttribute("href"),
      "https://cwl.orcasandbox.com/company"
    );
  });

  it("should route our team link to team page", async () => {
    let team = await $("a=Our Team");
    assert(team.getAttribute("href"), "https://cwl.orcasandbox.com/pod");
  });

  it("should route news and updates link to blog page", async () => {
    let newsAndUpdates = await $("a=News & Updates");
    assert(
      newsAndUpdates.getAttribute("href"),
      "https://blog.conversionwhale.com/news-and-updates/"
    );
  });

  it("should route careers link to careers page", async () => {
    let career = await $("a=Careers");
    assert(career.getAttribute("href"), "https://careers.dentalwhale.com/");
  });

  it("should route contact us link to contact page", async () => {
    let contact = await $("a=Contact Us");
    assert(
      contact.getAttribute("href"),
      "https://cwl.orcasandbox.com/contact-us"
    );
  });

  it("should route blog link to blog page", async () => {
    let blog = await $("a=Blog");
    assert(blog.getAttribute("href"), "https://blog.conversionwhale.com/");
  });

  it("should route linkedin link to linkedin page", async () => {
    let linked = await $(
      '//*[@id="gatsby-focus-wrapper"]/footer/section/div[1]/ul/li[6]/div/a[1]'
    );
    assert(
      linked.getAttribute("href"),
      "https://www.linkedin.com/company/conversion-whale/"
    );
  });

  it("should route instagram link to instagram page", async () => {
    let insta = await $(
      '//*[@id="gatsby-focus-wrapper"]/footer/section/div[1]/ul/li[6]/div/a[2]'
    );
    assert(
      insta.getAttribute("href"),
      "https://www.instagram.com/conversionwhale/"
    );
  });

  it("should route facebook link to facebook page", async () => {
    let fb = await $(
      '//*[@id="gatsby-focus-wrapper"]/footer/section/div[1]/ul/li[6]/div/a[3]'
    );
    assert(
      fb.getAttribute("href"),
      "https://www.facebook.com/conversionwhale/"
    );
  });
});
