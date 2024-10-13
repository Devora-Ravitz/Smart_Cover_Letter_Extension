chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copyToExtension",
    title: "Copy text to extension",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copyToExtension") {
    chrome.storage.local.set({ highlightedText: info.selectionText });
  }
});
