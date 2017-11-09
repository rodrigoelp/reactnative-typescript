# React Native + Typescript + Tab Navigator + Vector Graphics + Section Lists

Yup... you read that title correctly... starting to make the exercises a lot more difficult as I want to tackle more libraries commonly used.

So... __What is this exercise about?__

Mainly, about how the `TabNavigator` works, learning about the lifecycle of the different components involved and things to avoid.

As an app, the idea is to build four distinctive screens, allowing you to organise the information presented to the user, giving them the opportunity to browse each section as they pleased without an scripted path for the user... That's what the `TabNavigator` component allows you to do.

And __Why did I include so many things into a single exercise?__

As exercises go, using the `TabNavigator` was going to be pretty simple, and you can go back in history to fetch that specific version, but I wanted to test the performance if I get a component loading lots of different things and what better opportunity than a gallery of icons as provided by `react-native-vector-icons` library?

And... I got tired of displaying lists of things... A `FlatList` and a `SectionList` does not seem to allow me to create complex collections as `UICollectionView` (in iOS) allows me to do... I wonder if this is possible in an easy way?

## Getting into it

In order to run the exercise you will need to download the dependencies and compile (pretty much like any other of these exercises)

```sh
$ yarn
$ ./node_modules/.bin/tsc
```

## Learnings of this exercise

Starting the project was a big headache.

There was a release overnight of a new version of `react-native` and some of the type definitions rolled back to an earlier version causing the issues I describe [here](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/21294). At the time, you had to fix (manually) the version of the defition as the default package was referencing an older version. It seems to be fixed now... but this gives me something to worry about when dealing with upgrades to newer versions of the framework.

Another learning is, the way of dealing with the icons (and that many elements at the same time) is less than optimal... I would like to be able to lazily load all the fonts, as I am requesting more throught the scroll but haven't got that far yet.

It was very useful to have a pre-existing list of names for all the icons [here](https://oblador.github.io/react-native-vector-icons/). The list is gigantic, some icon sets have around 2000+ icons. If you are interested in downloading the typescript list, check the [icons folder](./src/icons/) with all the definitions (Thankfully, I had vim to edit quickly all of it).

Finally (and the most important point for me), learnt how to link new dependencies in `react-native`. Originally, I was afraid the process was going to be complicated and had to tweak many things in xcode/android studio, but in reality was pretty straight forward... For instance, `react-native-vector-icons` seems to be compatible with the command `react-natve link`, that goes through all your dependencies and links it to your xcode/android studio project as necessary. I manually did the process on the xcode project without know how awesome this little tool is.