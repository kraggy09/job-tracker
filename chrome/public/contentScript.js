chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "selectDOM") {
    console.log("Platform:", message.platform);
    let selectedElement;

    if (message.platform.toLowerCase() === "linkedin") {
      selectedElement = document.querySelector(
        ".jobs-search__job-details--wrapper"
      );
    } else if (message.platform.toLowerCase() === "naukri") {
      selectedElement = document.querySelector(
        ".styles_job-header-container___0wLZ"
      );
    } else {
      selectedElement = document.body; // Fallback to body
    }

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
    sendResponse({ selectedDOM, platform: message.platform });
  }
});
