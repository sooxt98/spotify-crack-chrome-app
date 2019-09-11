chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; }, { urls: [
        "*://*.audio-ak-spotify-com.akamaized.net/*",
        "*://*.googlesyndication.com/*"
    ]}, ["blocking"])