# React Native Tutorial: Setting up Multiple Environments for iOS and Android

This repository is a resource for a tutorial I wrote on Medium. You can read it [here](https://medium.com/@maximejulian/setting-up-multiple-environments-on-react-native-for-ios-and-android-c43f3128754f).

## Installation

Install dependencies

```sh
npm install
```

Install iOS dependencies:

```sh
cd ios
pod install
cd ../
```

## Commands

Run iOS `development` version:

```sh
npx react-native run-ios --scheme "MyAppDevelopment"
```

Run iOS `production` version:

```sh
npx react-native run-ios
```

Run Android `development` version:

```sh
npx react-native run-android --variant=developmentrelease
```

Run Android `production` version:

```sh
npx react-native run-android --variant=release
```
