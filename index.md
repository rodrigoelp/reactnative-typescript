# Table of samples

Every folder in the `samples` directory is a single app. If you want to browse and play with that application in vscode I suggest you to open that folder within vscode:

```sh
$> cd samples/<sampleapp_you_want_to_browse>
$> code .
```

Before running any project, you might need to setup its dependencies locally as I was not going to push all the dependencies.

```sh
$> cd samples/<sampleapp_you_want_to_browse>
$> npm install
$> ./node_modules/.bin/tsc
```

_Step 2: will install all the dependencies. Alternatively, you can run `$> yarn` which will install the dependencies as well (if you have yarn installed)_

_Step 3: will compile the typescript code and populate the `lib/` folder. OTHERWISE YOU WILL GET THE RED SCREEN OF FAILURES_

If you want to know more about npm: [Follow this link](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

## 1.Hello World

Minimum configuration to build and execute a react-native app in iOS and Android, written in typescript + tslint + vscode configurations.

## 2. Actions

Just an increment of the previous sample. Learning about subcomponents, styles and usage of resources.

## 3. ToDos (really simple-poorly built- list of todos)

Getting the practice of setting up a new react-native + typescript is boring but necessary... so, decided to take a look at a very simple list of todos... How to add items and how to remove it.

> I thought doing this sample was going to be dead easy as all I needed to do was:
>
> 1. Display a list on the screen.
> 1. Understand a bit better flexbox (completely missed this)
> 1. Get some navigation to work (completely missed on this one as well)
>
> Hopefully, you will notice some of the mistakes I have made in that app. It made me understand that I needed to spend more time looking at some of the dependencies (and youtube videos to learn more).

## 4. NavScreen (Navigating between screens and passing data through)

Going back to baby steps. Let's get navigation to work. The objective is:

- Learn how to use a navigator (a navigator that pushes cards/views/screen as the user requires more information or details)
- How to pass arguments between each other (more especifically, how to send data to the top of the stack)
- What's the minimum configuration to get the navigator to work.
- Improving my understanding of flex.

## 5. Declarations

Not a __react native__ exercise.

The idea behind this exercise is to understandh how to generate the type definitions (or `d.ts` files) for a given javascrip library.

**Why?**

Typescript gives you a rich way to understand your code. It gives you guidance when writing it and type safety when invoking your code.

Unfortunately, most of the Javascript developer have not used Typescript (_shocking! I know!_) and sometimes you will find a library that has not been 'defined' for typescript. The type definition file bridges your Javascript and Typescript world.

## 6. Simple Redux

From the react-native site to most tutorials around the web, one common topic spoken around is Redux.

But what is it?
Plainly put, is a framework (not attached to react-native in particular) that tries to separate the application state from your logic to decrease the mutability of your state and helpfully adding some simple concepts to order the chaos of communicating changes between components.

These are the first steps towards building an application with React-Native, Typescript and Redux. Unfortunately, I end up complicating things a bit too much. Exercise 7 should be easier to follow to begin with.

## 7. Simple Redux app (A counter)

This application will increase or decrease the current count... By how much you ask? I don't know... let's be crazy and get random numbers.

This second exercise should allow me to practice and understand just redux concepts without having to worry about multiple reducers, action creators and the store.

In here you will find a single container, single reducer, two action creators and one store (is always one store in redux). Also, will be trying to fix that nasty declaration from the simple redux exercise `class Container extends React.Component<any>`.

## 8. A feeder app (first try)

So far I've done two exercises with redux, the first one (exercise 6) allowed me to start understanding these concepts and the second one (exercise 7), gave me the opportunity to test those concepts in a very simple scenario.

Now, so far I have been practicing with synchronous functions and that is kind of boring. In the real world most opertions take some time to complete. How does redux deal with that?

What should I learn to deal asyncrhonous state?

Let's find out!

## 9. Back to basics (standard controls)

As much fun as I had building the feeder app, I've started to notice I've not played with most controls... and as the matter of fact, haven't played with the android emulator either... so, I will create a project that allows me to practice different controls, nothing fancy and no logic behind all the controls, just a showcase of the controls.

## 10. Typepography (CURRENTLY WORKING ON THIS ONE)

Over these past exercises, just noticed the font names have unexpected names (some times)... So, let's create a simple app that explores all the different fonts available to us in react native.

## 11. Typepography 2.0 (Upcoming)

Wondering if there is a dynamic way of getting all the systems fonts, if react native does not provide it, could I create a native service to look that for me and pass it through the react native side of the app?

This means: time for interops `iOS => React Native` and `Android => React Native`! (and maybe back?)

## 12. Back to the Futuredux (redux and navigation) (Upcoming)

Uhms... I used the `StackNavigator` and completely ignored `TabNavigator`.

In fact, how do I do navigators with [redux](https://reactnavigation.org/docs/guides/redux)?

Info to [tabnavigator](https://reactnavigation.org/docs/navigators/tab)

## 13. Making feeder great again (not building a wall)

The rest api has lots of things I did not explore...

How about if we have a list of the users and from there explore their photos? Maybe it will be a good opportunity to use the section list and try to implement refresh.

How about if we show the details of one of the posts with its comments?