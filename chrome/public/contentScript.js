// contentScript.js
chrome.storage.local.get(["Kaif"], (result) => {
  console.log("Value in content script:", result.Kaif);
});
