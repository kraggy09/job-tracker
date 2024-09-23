let lastActiveTabId = null;

// Listen for tab updates to track the last active tab
chrome.tabs.onActivated.addListener((activeInfo) => {
  lastActiveTabId = activeInfo.tabId;
});

// Update lastActiveTabId when the tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.active) {
    lastActiveTabId = tabId;
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addJob") {
    const tabId = lastActiveTabId; // Use the last active tab ID
    if (!tabId) {
      console.log("No active tabs found.");
      sendResponse({ error: "No active tabs found." });
      return;
    }

    chrome.tabs.get(tabId, (currentTab) => {
      if (chrome.runtime.lastError || !currentTab) {
        sendResponse({ error: "No current tab found." });
        return;
      }

      const currentTabUrl = currentTab.url; // Get the URL of the active tab
      let platform = "others"; // Default platform

      // Determine the platform based on the URL
      if (currentTabUrl.includes("linkedin.com")) {
        platform = "LinkedIn";
      } else if (currentTabUrl.includes("naukri.com")) {
        platform = "Naukri";
      } else if (currentTabUrl.includes("indeed.com")) {
        platform = "Indeed";
      } else if (currentTabUrl.includes("wellfound.com")) {
        platform = "Wellfound";
      }
      // Send a message to contentScript.js to select the DOM element
      chrome.tabs.sendMessage(
        tabId,
        { action: "selectDOM", platform: platform },
        (response) => {
          if (chrome.runtime.lastError) {
            console.log(
              "Error sending message to content script:",
              chrome.runtime.lastError
            );
            sendResponse({ error: "Content script not available." });
            return;
          }

          if (response && response.selectedDOM) {
            sendResponse({
              selectedDOM: response.selectedDOM,
              platform: platform,
              jobUrl: currentTabUrl,
              jobDetails: response.jobDetails,
            });
          } else {
            sendResponse({ error: "No DOM selected." });
          }
        }
      );
    });

    // Return true to indicate that we will send the response asynchronously
    return true;
  }
});
