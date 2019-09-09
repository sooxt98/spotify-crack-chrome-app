// webview.addEventListener('loadcommit', function() {
//     webview.insertCSS({
//         code: `
//         ._668f8eb097574762d66d361cc6d37850-scss, .Root__ads-container {
//             display: none !important;
//         }
//         `,
//         runAt: 'document_start'
// });


chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://audio-ak-spotify-com.akamaized.net/*"]},
    ["blocking"])