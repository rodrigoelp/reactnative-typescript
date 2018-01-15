# Table of samples

Every exercise described here, should have been downloaded to your `samples` folder, prefixed with a number (matching the number given to these exercises). If the folder is empty, you might need to initialise the submodules by typing in the root folder of this repo:

`git submodule update --init --recursive`

If you want to browse and play with that application in `vscode` (sublime, atom or any other) I suggest you to open that folder instead of the root folder. Most tools are configured to work within the project itself.

```sh
$> cd samples/<sampleapp_you_want_to_browse>
$> code .
```

Before running any project, you might need to setup its dependencies locally as I was not going to push all the dependencies. I recommend `yarn` as it is much faster than `npm` (or it feels much faster) but, in case you don't have `yarn` installed here is the command you need to type:

```sh
$> cd samples/<sampleapp_you_want_to_browse>
$> npm install
$> ./node_modules/.bin/tsc
```

If you **DO** have `yarn` installed then:

```sh
$> cd samples/<sampleapp_you_want_to_browse>
$> yarn
$> ./node_modules/.bin/tsc
```

_Step 2: will install all the dependencies. Alternatively, you can run `$> yarn` which will install the dependencies as well (if you have yarn installed)_

_Step 3: will compile the typescript code and populate the `lib/` folder. OTHERWISE YOU WILL GET THE RED SCREEN OF FAILURES_

If you want to know more about npm: [Follow this link](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

## Before you start browsing the code

I wrote below a few (lots) words to describe the intension behind (or warnings) each exercise I set up myself to do. If you are interested, each repo has its own readme file where I discuss a few ideas I had, observations and notes to future Rod reading the code (I am Rod, just in case). If you find a comment out of context, please let me know and I will fix it as soon as possible.

## Exercises

### 1.Hello World

This project gives you the minimum configuration to build and execute a react-native app in iOS and Android, written in typescript with the typescript linter (`tslint`) + vscode project configuration to debug the application.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-1)

### 2. Actions

Just an increment of the previous sample.

Learning about subcomponents, styles, usage of resources and how to listen to button events.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-2)

### 3. ToDos (really simple-poorly built- list of todos)

Getting the practice of setting up a new react-native + typescript is boring but necessary... so, decided to take a look at a very *simple* list of todos... How to add items and how to remove it.

> I thought doing this sample was going to be dead easy as all I needed to do was:
>
> 1. Display a list on the screen.
> 1. Understand a bit better flexbox (completely missed this)
> 1. Get some navigation to work (completely missed on this one as well)
>
> Hopefully, you will notice some of the mistakes I have made in that app. It made me understand that I needed to spend more time looking at some of the dependencies (and youtube videos to learn more).

That sounds simple, right?

Wrong!

*Learn to walk before you run* used to tell me mom every time I was learning something new.

Unfortunately, I tried to fly when I was still unstable on my legs and this exercise is a pure of different things. Understanding a list is not difficult, the part making me struggle here was understanding how navigation works and how to pop views from the stack.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-3)

### 4. NavScreen (Navigating between screens and passing data through)

Going back to baby steps.

Let's get navigation to work.

The objective is:

- Learn how to use a navigator (a navigator that pushes cards/views/screen as the user requires more information or details)
- How to pass arguments between each other (more especifically, how to send data to the top of the stack)
- What's the minimum configuration to get the navigator to work.
- Improving my understanding of flex.

This exercise will be just checking the `StackNavigator` as the `TabNavigator` does define routes and I can concieve an example to get it to switch tabs with a different control, but a `StackNavigator` was giving me issues previously.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-4)

### 5. Declarations

Not a __react native__ exercise but something very useful if you are working with typescript.

The idea behind this exercise is to understandh how to generate the type definitions (or `d.ts` files) for a given javascrip library; a library outside of your control that needs to be wrapped and used in your project.

**Why?**

Typescript gives you a rich way to understand your code. It gives you guidance when writing it and type safety when invoking your code.

Unfortunately, most of the Javascript developer have not used Typescript (_shocking! I know!_) and sometimes you will find a library that has not been 'defined' for typescript. The type definition file bridges your Javascript and Typescript world without you having to sacrifice the safety of types.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-5)

### 6. Simple Redux

From the react-native site to most tutorials around the web, one common topic spoken around is Redux.

But what is it?
Plainly put, is a framework (not attached to react-native in particular) that tries to separate the application state from your logic to decrease the mutability of your state and helpfully adding some simple concepts to order the chaos of communicating changes between components.

These are the first steps towards building an application with React-Native, Typescript and Redux. Unfortunately, I end up complicating things a bit too much (again). Exercise 7 should be easier to follow to begin with.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-6)

### 7. Simple Redux app (A counter)

This application will increase or decrease the current count... By how much you ask? I don't know... let's be crazy and get random numbers.

This second exercise should allow me to practice and understand just redux concepts without having to worry about multiple reducers, action creators and the store.

In here you will find a single container, single reducer, two action creators and one store (is always one store in redux). Also, will be trying to fix that nasty declaration from the simple redux exercise `class Container extends React.Component<any>` as I did not know how to create a type with merged definition.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-7)

### 8. A feeder app (first try)

So far I've done two exercises with redux, the first one (exercise 6) allowed me to start understanding these concepts and the second one (exercise 7), gave me the opportunity to test those concepts in a very simple scenario.

Now, so far I have been practicing with synchronous functions and that is kind of boring. In the real world most opertions take some time to complete. How does redux deal with that?

What should I learn to deal asyncrhonous state?

Let's find out!

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-8)

### 9. Back to basics (standard controls)

As much fun as I had building the feeder app, I've started to notice I've not played with most controls... and as the matter of fact, haven't played with the android emulator either... so, I will create a project that allows me to practice different controls, nothing fancy and no logic behind all the controls, just a showcase of the controls.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-9)

### 10. Typography

Over these past exercises, just noticed the font names have unexpected names (sometimes)... So, let's create a simple app that explores all the different fonts available to us in react native.

Fortunately for me, I found online a list of fonts supported by both Android and iOS. Hard coding this list may give us a foundation to work with.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-10)

### 11. Typography 2.0

Previously, we used a hard coded list to iterate and display all the fonts available to use in an operating system (A very uncommon thing to do as an app for both iOS or Android).

But... I started to wonder,

Is there a dynamic way of getting all the systems fonts?

iOS has a method exposed on its `UIFont` object, I am not that sure about Android (let's investigate how!).

If react native does not provide it, could I create a native service to look that for me and pass it through the react native side of the app?

This means: time for interops `iOS => React Native` and `Android => React Native`! (and maybe back?)

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-11)

### 12. Tab Navigation

To avoid information overload, is important to know how to organise and present data to the user.

Let's use twitter as an example: the application presents a tweet stream, users, mentions and settings in clear sections.

Each of these sections have clear and well defined functionality, intended to be discovered almost immediately. This is a behaviour very different to the one provided by a `StackNavigator` and I completely ignored how to work with `TabNavigator` before... So, I might need to take a look at other ways of navigating the content provided by an application.

I had planned to look at a different navigator mixing it up with redux... but I need to remember, babysteps (again, my mom always used to say: "piano piano si va lontano", meaning "you will get far if you do it calmedly and steadily"... although the actual translation from Italian is slowly one goes far). So, I will slowly build my way there.

Info to [tabnavigator](https://reactnavigation.org/docs/navigators/tab)

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-12)

### 13. Reduxing the Tab Navigator. (Tab navigation and redux)

The `TabNavigator` wasn't that bad, pretty similar (configurationwise) to the StackNavigator. Now, how do I get this to work as expected with a redux store?

Reading the `react-navigation` guide [here](https://reactnavigation.org/docs/guides/redux), I've found the basic configuration to get it to work, and browsing around for repos you will find pretty quickly lots of different (undocumented) examples that are very confusing.

The documentation also mentions to store the navigation state (whatever that is)... how can I use that?

More importantly, how can I configure my application so a container or component does not know about the navigator (increasing the capacity of code composition further in the future).

A great place of inspiration, perspiration and examples was the [redux example](https://github.com/react-community/react-navigation/tree/master/examples/ReduxExample) provided by the community. Based on this, I decided to build an application with a log-in screen and an user area in which you will be able to tab around your way or log-out.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-13)

### 14. How do I persis things locally?

So far, we've learnt libraries to develop our applications such as: `react-navigation`, `react-native-vector-icons`, `react-native-elements`, and `redux`. All very useful but... I keep losing the data I've input when the application is deallocated from memory.

Ideally, I should be able to preserve the application data store... and that is exactly what `redux-persist` does for you. Redux persist is not going to replace your usage or configuration or your redux application, it will enhance it and extend it for you. This means you need to be more conscious about the state you put in your application data store, otherwise you will find yourself writing lots of transformation from a previous state to your new state, but at this very moment, we will focus on just creating a simple application requesting information from a slow data source and display it on the screen.

In this exercise we will be writing an application to count your energy intake (or caloric intake, although the application is going to have the data expressed in kilo joules or kJ), meaning we need to get a list of products (or available energy sources) and mark the quantity of each as we ingest it.

[More info about redux-persist](https://github.com/rt2zz/redux-persist/)
[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-14)

### 15. Let's check other persistance forms... Couch, Pouch or Sqlite?

A common example to investigate is the integration to any database of sorts.

Reading about different technologies can open up your mind to new ways to fullfil your goals, but reading for the sake of reading does not give you these ideals, we need to tackle a problem.

An application to browse an online catalog would be great, but what about if we could take that store and make it offline? wouldn't that make your application more responsive and save up resources?

On this first exercise, we will look into sqlite before we try to dive head first in pouchdb.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-15)

### 16. Same book catalog, but in pouchdb!

Reimplementing exercise 15, but using pouch db with async storage.

This exercise will illustrate how much or how little code you need to achieve a similar behaviour with PouchDB (as well as understanding how to use it).

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-16)

### 17. Swiftly. Wondering what you need to do to get a swift project to work nicely with react native?

So far, we have been working with the ObjectiveC (which is quite a dated language)... so... how difficult would it be to make react-native work with Swift?

Swift is a better language than ObjC (although XCode has become horribly slow... no idea if the root cause is Swift support) but... It would be lovely to have the option to pick which programming language your template is going to be based upon (more on this a little bit later)

So... this exercise will take a new project we just created in xcode (choosing swift as our programming language) and add react native support to display a view or what have you.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-17)

#### I see you continued reading... perhaps you like idea about getting react native cli to generate a template that better fits your native programming skills

I love Swift as a programming language as much as I love C# (which is a lot) and F# (although I do not have a lot of experience with this one)... So, I was mildly annoyed when you need to go around so many different loops to get a simple Swift project up and running with React Native. Because of that I've created a feature request, to extend `react-native init` to take in a series of parameters to specify if you want your template to be based on swift or objective c for ios or java/kotlin on the android side.

Ideally, this feature request should also enrich the ecosystem as building application in react native tend to drive you a little towards the native side to solve some issues.

If you want to support this idea, please vote on [canny.io](https://react-native.canny.io/feature-requests/p/initialise-a-new-project-with-specific-native-language) to get the facebook people interested on this.

### 18. Infinite Scrolls

One of the awesome things of learning from an online community is, you get to interact with other developers and get ideas from other people.

As I explored before, I had to fetch the typography from the system or download certain information before I was going to display it. This process meant that I had to fetch a set that was relatively known in size for me to define if I wanted to display a loading message or just risk it while the application was downloading data.

Looking for better ways to deal with this I bumped into [Spencer Carli youtube channel](https://www.youtube.com/channel/UC_uuod9nde9Hoea8xIVBeZQ) and his infinite scrolling app. The basic idea is, download just a few pages worth of data and display is as quickly as possible. This gives you great responsiveness and saves resources.

This exercise is a reimplementation of [Spencer Carli flat list demo](https://github.com/spencercarli/react-native-flatlist-demo)... but in typescript 😝 with some custom variation 🤨

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-18)

### 19. Basic animations

We've looked into lots of different controls, interops with native code (at least in iOS), dealing with data storage and persistance, navigation and immutability of global state (redux)... all of that is good but the finess and delightful experience does not come from just a good and stable application, it is generate from the interactions with the application.

Indicating how different elements variate over time is a great way of communication with the user, so the next exercise is about the animation api provided by react native.

What would be a great little animation to make? let's get the little prince to take off his little planet.

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-19)

### 20. Animating flex box. Expanding a set of sections.

Wondering how to expand and collapse sections with an smooth experience? So am I, let's do this!

[Source code](https://github.com/rodrigoelp/reactnative-typescript-exercise-20)

### 21. Animations 2. React native animatable library

Checking out what is possible with animatable library and how is different to the one that is already part of react-native.

### 22. Fancy animations or Animations 3. Lots start looking into professional animations that we can import... Lottie to the rescue!

What to build? TBA

### 23. Gestures.

What to build? TBA

## Useful readings:

Couchbasing: [To the blog](https://blog.couchbase.com/getting-started-with-react-native-android-and-couchbase-lite/)
Couchbase: [Github](https://github.com/couchbaselabs/react-native-couchbase-lite)... It worries me there has not been any activity for a while (being one of their products)
Sample app: [thank you library for all](https://github.com/libraryforall/ebook-catalog-react-native)
Pouching?: [Pouch sample](https://blog.yld.io/2016/07/05/building-a-offline-first-application-using-react-native-and-pouchdb/#.Wfux0BOCyRc)
