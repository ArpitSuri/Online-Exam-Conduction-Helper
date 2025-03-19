const blockedSites = ["facebook.com", "youtube.com", "twitter.com"];

// Block updates to blocked sites
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === "loading" && blockedSites.some(site => tab.url.includes(site))) {
        chrome.tabs.update(tabId, { url: "chrome://newtab" }).catch(() => {
            console.warn("Tab no longer exists or cannot be updated.");
        });
    }
});

// Block new tab openings
chrome.tabs.onCreated.addListener((tab) => {
    chrome.tabs.remove(tab.id).catch(() => {
        console.warn("Tab already closed or does not exist.");
    });
});

// Prevent switching to blocked tabs
chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (chrome.runtime.lastError) {
            console.warn("Tab not found: ", chrome.runtime.lastError);
            return;
        }
        if (blockedSites.some(site => tab.url.includes(site))) {
            chrome.tabs.update(tab.id, { url: "chrome://newtab" }).catch(() => {
                console.warn("Failed to redirect tab.");
            });
        }
    });
});
