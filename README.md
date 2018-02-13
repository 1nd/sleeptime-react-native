# SleepTime

Android app to find out recommended sleep and wake up time.

This project was created with ejected version of [Create React Native App](https://github.com/react-community/create-react-native-app). Currently only Android version is developed.

## To develop

### Linux or macOS

1. Clone this repo.
2. Install [nvm](https://github.com/creationix/nvm).
3. `nvm use` to use correct Node.js version. If it's not installed yet, nvm will tell you to install it first, do it!
4. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/).
5. Install React Native CLI: `yarn global add react-native-cli`.
6. Install [Java Development Kit (JDK) 8 or newer](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html).
7. [Set up Android development enviroment](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment).
8. [Install Watchman](https://facebook.github.io/watchman/docs/install.html) if you want. It's optional but highly recommended for better performance.
9. [Prepare the Android device](https://facebook.github.io/react-native/docs/getting-started.html#preparing-the-android-device).
10. Set up is done. Run `yarn android` to run the app.

### Windows

1. Clone this repo.
2. Set up [Chocolatey](https://chocolatey.org/).
3. Open Administrator Command Prompt and then install Node.js, Python 2, and Java Development Kit (JDK) 8 (or newer) via Chocolatey: `choco install -y nodejs.install python2 jdk8`
4. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/).
5. Install React Native CLI: `yarn global add react-native-cli`.
6. [Set up Android development enviroment](https://facebook.github.io/react-native/docs/getting-started.html#android-development-environment).
7. [Prepare the Android device](https://facebook.github.io/react-native/docs/getting-started.html#preparing-the-android-device).
8. Set up is done. Run `yarn android` to run the app.

## Available Scripts

### `yarn start`

Runs your app in development mode.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
```

### `yarn test`

Runs the [jest](https://github.com/facebook/jest) test runner on your tests.

### `yarn android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator.

## Writing and Running Tests

This project is set up to use [jest](https://facebook.github.io/jest/) for tests. You can configure whatever testing strategy you like, but jest works out of the box. Create test files in directories called `__tests__` or with the `.test` extension to have the files loaded by jest. See the [the template project](https://github.com/react-community/create-react-native-app/blob/master/react-native-scripts/template/App.test.js) for an example test. The [jest documentation](https://facebook.github.io/jest/docs/en/getting-started.html) is also a wonderful resource, as is the [React Native testing tutorial](https://facebook.github.io/jest/docs/en/tutorial-react-native.html).