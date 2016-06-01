# ionic-2-map-tabs

`ionic-2-map-tabs` is an example Ionic 2 app written in TypeScript that demonstrates how to use Google maps and LeafletJS maps. Each map is presented in a different tab.

## Browser Preview

After cloning the `ionic-2-map-tabs` repository, run the `ionic serve` command to preview the app in a browser. Add the `--lab` flag to see iOS and Android side by side in the browser:

`ionic serve --lab`

## Emulating iOS

Issue the following commands to run the `ionic-2-map-tabs` app in the Xcode iOS simulator:

```
ionic platform add ios
ionic build ios
ionic emulate ios
```

You will need to install [Xcode](https://developer.apple.com/xcode/) to emulate iOS.

## Emulating Android

Issue the following commands to run the `ionic-2-map-tabs` app in the Android simulator:

```
ionic platform add android
ionic build android
ionic emulate android
```

You will need to install the [Android SDK](https://developer.android.com/studio/index.html) to emulate Android.
