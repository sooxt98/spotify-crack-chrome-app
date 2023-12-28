// background.js
chrome.runtime.onInstalled.addListener(() => {
    fetch('rules.json')
        .then(response => response.json())
        .then(rules => {
            chrome.declarativeNetRequest.updateDynamicRules({ addRules: rules });
        })
        .catch(error => console.error(error));
});