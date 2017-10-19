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
```

If you want to know more about npm: [Follow this link](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

## 1.Hello World

Minimum configuration to build and execute a react-native app in iOS and Android, written in typescript + tslint + vscode configurations.

## 2. Actions

Just an increment of the previous sample. Learning about subcomponents, styles and usage of resources.

## 3. ToDos

Getting the practice of setting up a new react-native + typescript is boring but necessary... so, decided to take a look at a very simple list of todos... How to add items and how to remove it.

> I thought doing this sample was going to be dead easy as all I needed to do was:
>
> 1. Display a list on the screen.
> 1. Understand a bit better flexbox (completely missed this)
> 1. Get some navigation to work (completely missed on this one as well)
>
> Hopefully, you will notice some of the mistakes I have made in that app. It made me understand that I needed to spend more time looking at some of the dependencies (and youtube videos to learn more).

## 4. NavScreen

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
