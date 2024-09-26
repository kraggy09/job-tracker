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

    // Function to extract job details
    function scrapeGlassDoor() {
      // Get the company name
      selectedElement = document.querySelector(
        ".JobDetails_jobDetailsContainer__y9P3L"
      );
      const companyName =
        selectedElement.querySelector(
          ".EmployerProfile_employerNameContainer__tb7JV h4"
        )?.innerText || "N/A";

      // Get the job title
      const jobTitle =
        selectedElement.querySelector(".heading_Level1__soLZs")?.innerText ||
        "N/A";

      // Get the location
      const jobLocation =
        selectedElement.querySelector(".JobDetails_location__mSg5h")
          ?.innerText || "N/A";

      // Get the company rating
      const companyRating =
        selectedElement.querySelector(
          ".EmployerProfile_ratingContainer__ul0Ef span"
        )?.innerText || "N/A";

      // Get the logo image URL
      const logoUrl =
        selectedElement.querySelector(".EmployerLogo_logoContainer__o39lB img")
          ?.src || "N/A";

      const salaryRange =
        selectedElement
          .querySelector(".SalaryEstimate_salaryRange__brHFy")
          ?.innerText.split("(Employer")[0] || "N/A";

      // Create an object to hold the extracted job details
      const jobDetails = {
        companyName: companyName,
        jobTitle: jobTitle,
        location: jobLocation,
        companyRating: companyRating,
        logoUrl: logoUrl,
        salaryRange: salaryRange,
      };

      console.log(jobDetails);
      return jobDetails;
    }

    const scrapeIndeed = () => {
      selectedElement = document.querySelector(
        ".jobsearch-HeaderContainer.css-n78gek.eu4oa1w0"
      );
      return {
        jobTitle:
          selectedElement
            .querySelector(
              'h2[data-testid="jobsearch-JobInfoHeader-title"] span'
            )
            ?.innerText.split("- job post")[0] || "N/A",
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

    function scrapeInternshala() {
      selectedElement = document.querySelector(".internship_meta");
      if (!selectedElement) {
        console.log("No internship data found");
        return;
      }

      // Scrape job title
      let jobTitle =
        selectedElement.querySelector(".heading_4_5.profile")?.innerText ||
        "N/A";

      // Scrape company name
      let companyName =
        selectedElement.querySelector(".heading_6.company_name a")?.innerText ||
        "N/A";

      // Scrape job location
      let jobLocation =
        selectedElement.querySelector("#location_names a")?.innerText || "N/A";

      // Scrape start date
      let startDate =
        selectedElement.querySelector("#start-date-first")?.innerText || "N/A";

      // Scrape CTC (annual salary)
      let salaryRange =
        selectedElement.querySelector(".salary_container .salary .desktop")
          ?.innerText || "N/A";

      // Scrape experience required
      let experience =
        selectedElement.querySelector(".job-experience-item .desktop-text")
          ?.innerText || "N/A";

      // Scrape application deadline
      let applyBy =
        selectedElement.querySelector(".item_body")?.innerText || "N/A";

      // Scrape job status (e.g., Fresher Job)
      let jobStatus =
        selectedElement.querySelector(".status-inactive")?.innerText || "N/A";

      // Organizing scraped data into an object
      let jobDetails = {
        jobTitle,
        companyName,
        jobLocation,
        startDate,
        salaryRange,
        experience,
        applyBy,
        jobStatus,
      };

      console.log(jobDetails);
      return jobDetails;
    }

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
      case "internshala":
        jobDetails = scrapeInternshala();
        break;
      case "glassdoor":
        jobDetails = scrapeGlassDoor();
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
