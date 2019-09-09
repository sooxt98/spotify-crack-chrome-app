chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://audio-ak-spotify-com.akamaized.net/*"]},
    ["blocking"])

    // https://audio-ak-spotify-com.akamaized.net/audio/6b35ad8b4bbe2d7331dc5132e90192fb3e0ba6e0?__token__=exp=1568041016~hmac=693db37624dde36e331358b17004107b339e7ab079cc26486eb8ee728f244a73
    // https://audio-ak-spotify-com.akamaized.net/audio/8c5c86ef9696f391145b17f173d3304497cbac56?__token__=exp=1568044853~hmac=c1f3a751a8b1d307f8d942042ddb910ed53d38660a700ecef320156f0ad23005
    //https://audio-fa.scdn.co/audio/6099aa1f51c8274efb795dfad905a23db6530724?1568045365_NweDm3PreMJJC8QXzKuRTxTPFaVhlmUrZLCdTqO2orY=