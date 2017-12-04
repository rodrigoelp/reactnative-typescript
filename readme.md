# Working with React-Native and Typescript

In here you will find a set of samples that I have been creating to help me understand how to work with [react-native](https://facebook.github.io/react-native/) and [typescript](https://www.typescriptlang.org/).

So, what is in this repo?

Multiple examples (and hopefully some explanation) of things you need to get react-native and typescript to work nicely between each other.

## Objective

- Learn react-native
- Share with others working examples of react-native and typescript.
- Get feedback from others, if you have more knowledge and you have ways to improve these examples? by all means contribute to this or provide feedback. (Raise any feedback as an issue of this repo)

## Background

I want to learn how to start building apps on [react-native](https://facebook.github.io/react-native/). Now, I've done web development in the past and I've also spent some time playing with [nodejs](https://nodejs.org/en/) so, I am not a complete foreigner to some of its concepts.

Now, React, React-Native and Node are technologies based on JavaScript, which in _my personal view_ is a pervasive, evil programming language that should've been improved a long time ago and no real consensus has been formed on what it should be. ES[5, 6, 7, etc] is a good first start but still is missing some important features for me. I like a static type system so I wanted something guiding me as I write my code.

So, I started looking at React-Native and other languages such as Typescript, Purescript, Kotlin, etc; and decided to settle with [Typescript](https://www.typescriptlang.org/) because:

- It has a big enough community backing it up.
- It seems to be close enough to JavaScript so porting samples between each other should be relatively straightforward.
- Requires fewer plugins/modules to work.

## What do I need to use this repo?

You will need already installed to use/try/abuse/copy/whatever this code:

> _I am a Mac user. Take these recommendations with a pinch of salt as it might not apply to your system._

- First and extremely important, you will need `git`. Without it this repo might not make sense as every exercise has been stored in a separate repository and added to this one as submodules. If you want to check each individual project I have set up an [index](./index.md) with a basic description and observations gathered along its development process.
- [XCode](https://developer.apple.com/xcode/) with command line tooling installed already. This is **required to run your code in iOS**.
- [Android Studio](https://developer.android.com/studio/index.html) or  [Visual Studio for Mac](https://docs.microsoft.com/en-us/visualstudio/mac/) with the Android tooling and an emulator.
- A text editor of sorts. I like [vscode](https://code.visualstudio.com/) a lot.
- [Node](https://nodejs.org/en/). Best way to get it into your system is via [brew](https://brew.sh/) as I have tried the mac installer and it wasn't as flexible as with brew. There are other mechanisms to get it such as the [node version manager](https://github.com/creationix/nvm/blob/master/README.md) but I found it was much easier to do `brew install node`
- You will need React-Native which can be installed via node package manager: `npm install react-native -g`

## How to clone this repo?

Cloning a repo with submodules is not too much of a problem (although dealing with submodules can be a pain)

Just type in a terminal:

`git clone --recursive -j8 git@github.com:rodrigoelp/reactnative-typescript.git`

*What are those parameters?*

Pretty easy:

- `--recursive` tells `git` that you want to download everything in this repo, as well as anything included in the `.gitmodules` file.
- `-j8` tells `git` you want to download anything additional in parallel.

### But I have already typed in git clone before I read this message!

That's fine... if you have already typed `git clone git@github.com:rodrigo.elp/....git` then you can initialize and download the exercises as follows (you must be at the root of the cloned project):

`git submodule update --init --recursive`

This will take care of the submodules and set it up for you.

## Anything else?

Once you have downloaded the repo (or you could browse it in here) you will find inside the folder `samples` each of my attempts. Inside there is a small explanation of what is contained.

If you want to read the intention behind any of the samples/exercises, open the [index file](./index.md).

**Enjoy and I hope you find this repo useful.**

### Note

I am open to suggestions and improvements. Create an issue with your comment to talk it over.

#### Extension note

Some of these samples could be used as a starter for your application (as it becomes fairly repetitive). If you want to use it to kickstart your project be my guest.