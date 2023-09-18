# uBlock Origin

Block all spotify AD using uBlock Origin

## Prerequisite

`Advanced -> I am an advanced user -> filterOnHeaders true`

## Rules

```
*://audio-ak-spotify-com.akamaized.net/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3
*://audio-akp-quic-spotify-com.akamaized.net/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3
*://audio-fa.scdn.co/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3
*://creativeservice-production.scdn.co/*$header=content-range:/\/\d\d\d\d\d\d$/,redirect=noop-0.5s.mp3

spotify.com##button[title="Upgrade to Premium"]
spotify.com##button[title="Effettua l'upgrade a Premium"]
spotify.com##div[data-testid="test-ref-div"]
```

![Fox](https://media.tenor.com/C1m2RQBqJpsAAAAM/fox-cute.gif)
