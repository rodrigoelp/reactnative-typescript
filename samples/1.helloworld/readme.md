# Hello World + Typescript

## Want to play with this code

1. Download/Clone it.
1. Open a terminal and enter `$> cd <cloned-folder>/1.helloworld/`
1. Then `$> npm install` (this will set up the dependencies for your project)
1. To start React-Native packager type: `$> react-native start` (it will block the terminal as it will be running a web server)
1. In a new terminal type in the same folder: `$> react-native run-ios` or `$> react-native run-android` (depends on the version you want to run)

### Note:

When you see

`$> {command}`

Its my terminal prompt.
For instance, my terminal shows me

`~/d/r/samples ❯❯❯ {command}`

Yours might show something different. Don't copy the characters `$>` if you are trying to follow these instructions.

## Steps I have followed to set up this project

1. `$> react-native init helloworld` (initialising the react-native project. This downloads react, react-native and other dependencies)
1. `$> cd helloworld/` (navigating into the project folder)
1. `$> mkdir lib src src/__tests__` (creating the project structure I want. `lib` will contain my js files and `src` will contain my typescript files)
1. `$> mv *.js lib/` (moving initial files into lib folder)
1. `$> mv __tests__ lib/` (moving initial files into lib folder)
1. `$> echo 'import "./lib/index";' > index.js` (creating the entry point for react to work properly, if you want to completely remove this file you will need to edit the `AppDelegate.m` file and the `android/app/build.gradle` file to point to the `lib/index.js` file instead)
1. `$> react-native run-ios` (checking everything works in the ios simulator. Alternatively, you could type `$> react-native run-android`)
1. `$> npm run test` (checking the test suite is still working.)
1. `$> npm install typescript tslint ts-jest @types/react @types/react-native @types/jest @types/react-test-renderer --save-dev` (in here you are installing as part of this project only: typescript and its linter, and type definitions between javascript and typescript for all the react-native framework)
1. **This step is special:** If you refresh your simulator at this this moment, you will get an error (for react-native v0.49.x, saying `unable to resolve module 'react-native' from ....`)... I am not sure what is going on, maybe `@types/react-native` is registered for the previous version and it can't get the latest... don't know, but to fix it you need to: `$> rm -rf ./node-modules/ && npm install`. This removes everything and redownloads it. Refresh the simulator to check everything is ok.
1. `$> ./node_modules/.bin/tsc --init --pretty --jsx react --module commonjs --target es2017 --sourceMap --outDir ./lib/` (this will create the `tsconfig.json`)
1. Include in the `tsconfig.json` file the following line **before** the last closing bracket `"include": [ "./src/" ]` (you might need to add a comma before the `"include"`)
1. Setting up the linter to work with `$> ./node_modules/.bin/tslint -i` (this creates the `tslint.json` file you will need it to configure the linter to your linking.
1. Let's remove all the content of `lib` as we are not going to need it next. `$> rm -rf ./lib/*.js ./lib/__test__/*.js`
1. Create the file `src/index.tsx` with the following content:

```typescript
/*
 Contents of index.tsx
*/
import * as React from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

const appStyles = StyleSheet.create({
    container: {
        alignItems: "center",
        flex: 1,
        justifyContent: "center",
    },
    excitedText: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        textDecorationStyle: "dashed",
    },
    normalText: {
        margin: 4,
    },
});

class App extends React.Component<object, object> {
    public render() {
        return (
            // this stupid '(' is here to allow me
            // to start breaking my return from the
            // next line.
            <View style={appStyles.container}>
                <Text style={appStyles.excitedText}>
                    Hello World!
                </Text>
                <Text style={appStyles.normalText}>
                    As expected, this is the most amazing message ever!
                </Text>
            </View>
        );
    }
}

AppRegistry.registerComponent("helloworld", () => App);

```

16. Compile your code into JavaScript with: `$> ./node_modules/.bin/tsc` (it will read the `tsconfig.json` file and deploy the `js` and `js.map` files in the `./lib/` folder)
1. Refresh your simulator to look at your awesome new app.
1. At this moment, tests are broken, so let's fix them. Unfortunately, you will need to split the index into two files (do not test the `AppRegistry`). Copy the class `App` with its imports into `App.tsx`. Check file `App.tsx` provided in this repo.
1. Fix `index.tsx` to import `App` into your scope. Check `index.tsx` provided in this repo.
1. Run `$> ./node_modules/.bin/tsc && npm run test`. If react-native is not broken (which it is as I am typing this) and everything else was done correctly. You should get 1 green test.