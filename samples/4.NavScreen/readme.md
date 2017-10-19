# Learning about Navigation

The previous exercise was a failure to me... End up with more questions than answers.

Back to square one, let's not take too many things for granted and read the [documentation](https://facebook.github.io/react-native/docs/navigation.html)

It seems there is a `Navigator` already provided with `react-native`... so, why isn't the documentation highlighting it?

I am going to split this exercise into two parts:

*Part 1* Write the app just using the navigator bundled with `react-native`. Check its benefits and write them down.

*Part 2* Rewire the app with `react-navigation` and check what I had wrong from the previous exercise as I could not get to work the update of list of todos. Check its benefits and write them down.

## Part 1: Using the `Navigator` of `react-native`

Check git history to check for the implementation.

The short story is: once the code is written and compiled, when you run the code you get a nice red screen telling you the `Navigator` is depricated and you should be using `react-navigation` or `react-native-navigation`...

... Sigh.

### Benefits

- Given it has been depricated. None.

## Part 2: Using [`react-navigation`](https://reactnavigation.org/docs/intro/)

Getting started with this library was not difficult. The documentation is superb and all you need to do is to check your types as you declare some of the components used on the samples.

Once you have installed the npm module `react-navigation` as illustrated below, you will need to create a `StackNavigator` (or a `TabNavigator`) and provide the route and initial state for it to load the first component. In my case, it is going to be a `StackNavigator` to start with.

```sh
$> npm install --save react-navigation @types/react-navigation
```

Check the [`app.tsx`](./src/app.tsx) file containing this wired up (_I've described everything there_).

Thankfully, the author of the type definition for `react-navigation` was kind enough to provide [tests](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/react-navigation/react-navigation-tests.tsx) that were a great guide for me to understand what type I needed to provide and how to get it to work (the reset part I mean).

### Notes: Going back

Not complaining about `navigator.goBack()`, but I do think reset to root or navigate to root should be a method exposed by the api.

Hopefully I will not forget these learning when applying it to my personal projects.

## Trying out [`react-native-navigation`](https://wix.github.io/react-native-navigation/#/)

I had a little play (did not push this code up) with `react-native-navigation`, which has a pretty good documentation as far as I could see. Had to write the sample app in javascript as right at this moment does have a type definition file that I can easily import (maybe it does not follow the `@types/react-native-navigation` convension).

Now, configuring this library with your project is not as easy as `react-navigation`. You will need to do some change in **xcode** and **android studio** for it to work.

A comprehensive description is found here: [iOS installation](https://wix.github.io/react-native-navigation/#/installation-ios) and here [Android installation](https://wix.github.io/react-native-navigation/#/installation-android)

**This made me consider that I need to spend some time understanding how to create these type definition files and how easy it will be to write it myself.**
