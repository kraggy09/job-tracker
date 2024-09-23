chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "selectDOM") {
    console.log("Platform:", message.platform);
    let selectedElement;
    let jobDetails = {}; // Define jobDetails here to avoid redeclaration

    const scrapeLinkedIn = () => {
      selectedElement = document.querySelector(
        ".job-details-jobs-unified-top-card__container--two-pane"
      );
      return {
        companyName:
          selectedElement.querySelector(
            ".job-details-jobs-unified-top-card__company-name a"
          )?.innerText || "N/A",
        companyLogo:
          selectedElement.querySelector(".ivm-view-attr__img-wrapper img")
            ?.src || "N/A",
        jobTitle:
          selectedElement.querySelector(
            ".job-details-jobs-unified-top-card__job-title h1 a"
          )?.innerText || "N/A",
        jobLocation:
          selectedElement.querySelector(
            ".job-details-jobs-unified-top-card__primary-description-container .t-black--light span"
          )?.innerText || "N/A",
        salaryRange:
          selectedElement.querySelector(
            ".job-details-jobs-unified-top-card__job-insight span"
          )?.innerText || "N/A",
      };
    };

    const scrapeNaukri = () => {
      selectedElement = document.querySelector(
        ".styles_job-header-container___0wLZ"
      );
      return {
        jobTitle:
          selectedElement.querySelector(".styles_jd-header-title__rZwM1")
            ?.innerText || "N/A",
        companyName:
          selectedElement.querySelector(".styles_jd-header-comp-name__MvqAI a")
            ?.innerText || "N/A",
        salaryRange:
          selectedElement.querySelector(".styles_jhc__salary__jdfEC span")
            ?.innerText || "N/A",
      };
    };

    const scrapeWellfound = () => {
      selectedElement = document.querySelector(".m-auto.flex.w-full.flex-col");
      return {
        companyName:
          selectedElement.querySelector(".text-lg.font-\\[500\\]")?.innerText ||
          "N/A",
        jobTitle:
          selectedElement.querySelector(".text-center.font-\\[700\\]")
            ?.innerText || "N/A",
        salaryRange:
          selectedElement.querySelector(
            ".text-lg.font-\\[500\\].text-gtmgreen-500"
          )?.innerText || "N/A",
      };
    };

    const scrapeIndeed = () => {
      selectedElement = document.querySelector(
        ".jobsearch-HeaderContainer.css-n78gek.eu4oa1w0"
      );
      return {
        jobTitle:
          selectedElement.querySelector(
            'h2[data-testid="jobsearch-JobInfoHeader-title"] span'
          )?.innerText || "N/A",
        companyName:
          selectedElement.querySelector('div[data-company-name="true"] a')
            ?.innerText || "N/A",
        jobLocation:
          selectedElement.querySelector(
            'div[data-testid="inlineHeader-companyLocation"]'
          )?.innerText || "N/A",
        salaryRange:
          selectedElement.querySelector("span.css-19j1a75")?.innerText || "N/A",
      };
    };

    switch (message.platform.toLowerCase()) {
      case "linkedin":
        jobDetails = scrapeLinkedIn();
        break;
      case "naukri":
        jobDetails = scrapeNaukri();
        break;
      case "wellfound":
        jobDetails = scrapeWellfound();
        break;
      case "indeed":
        jobDetails = scrapeIndeed();
        break;
      default:
        selectedElement = document.body;
    }

    console.log(jobDetails);

    if (!selectedElement) {
      sendResponse({ error: "No DOM selected." });
      return;
    }

    const selectedDOM = {
      tagName: selectedElement.tagName,
      id: selectedElement.id,
      className: selectedElement.className,
      innerHTML: selectedElement.innerHTML,
    };

    console.log(selectedDOM, "This is the selectedDom");
    sendResponse({ selectedDOM, platform: message.platform, jobDetails });
  }
});
