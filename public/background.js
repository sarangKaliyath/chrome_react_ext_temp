chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
  console.log("chrome.identity:", chrome.identity);
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getEmail") {
    chrome.identity.getProfileUserInfo({ accountStatus: "ANY" }, (info) => {
      if (chrome.runtime.lastError) {
        console.error("Error: ", chrome.runtime.lastError);
        sendResponse({ email: null });
      } else {
        console.log("User Email: ", info.email);
        sendResponse({ email: info.email });
      }
    });
    return true;
  }
});
