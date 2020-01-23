chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; }, { urls: [
        "*://*.audio-ak-spotify-com.akamaized.net/*",
        "*://*.googlesyndication.com/*",
        "*://*.audio-akp-quic-spotify-com.akamaized.net/*"
    ]}, ["blocking"])
