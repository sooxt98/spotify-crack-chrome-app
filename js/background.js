chrome.webRequest.onBeforeRequest.addListener(
    function(details) { 
        if(details.url.includes("audio-akp-quic-spotify-com.akamaized.net")) return {redirectUrl: 'https://raw.githubusercontent.com/anars/blank-audio/master/1-second-of-silence.mp3'};
        return {cancel: true};
    }, { urls: [
        "*://*.audio-ak-spotify-com.akamaized.net/*",
        "*://*.googlesyndication.com/*",
        "*://*.audio-akp-quic-spotify-com.akamaized.net/*"
    ]}, ["blocking"])
