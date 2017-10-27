# Implementing a simple counter with React-Native, Typescript and Redux

Once the previous exercise was completed ([here](../6.simpleredux/)), I wasn't sure about multiple aspects of redux and had several questions:

1. What's the relationship between the state and the combined reducers?
1. Can I express that relationship with a type?
1. How can I define an interface to model my state and my actions without having to cast the definition on `mapStateToProps` and `mapDispatchToProps`?

## What will be the output of this exercise?

A simple application counting up or down any randomly generated number.

This will give me practice with: one reducer, one container, one store and two action creators.

The state is going to be pretty simple: One number.

So my store state should look like:

```typescript
interface State {
    count: number;
}
```

If so, my reducer is going to be a function that takes in that number and returns the number. It will have to pay attention to the action, as the modifier (type) will inform me if the state is going to `increase` or `decrease` and by how much.

## Things found

### Moving things can be dangerous

I am not sure if is a problem with `Visual Studio Code` or `react-native`. But compiling the code (with packager and all) in one folder, stopping the packager, renaming the folder and running again gave me massive problems. There was some caching either done by xcode or react-native preventing the debugger from starting as expected.

After a while, even the project stops running altogether giving you an error saying _(I am paraphrasing the error)_:

```
compiler failed:
This was compiled on '/path/cache_something/folder1/random-stuff'
but is trying to reference '/path/cache_something/folder2/random-stuff'
```

I had no idea what was going on, opened xcode and clean the project, the errors continued.

The solution was to clean the project before moving it to a different folder 😓

Another solution is to commit your code and git clone it onto the directory you want. This was a hack... but it worked.

### Attention to detail

This is not related to react-native... or is it?

If you check the commit history for exercise 7, you will noticed I had a hack between commits to get `component/App.tsx` to `component/app.tsx`. MacOs for some reason thought these two files were the same and had to need to refresh its reference, but had real implications on the app.

It launched perfectly fine, rendered the component as I expected, but clicking on any button had no effect. There is nothing worst that something kinda working, you doubt the work you are doing yet are unable to see the problem.

It wasn't until I cloned to a different directory and tried to build again that the application complained it could not find `lib/components/app.js`... Something was caching on the previous directory and was mapping the content of `app.js` to `App.js`

I honestly don't know why I had this issue as my volume is formatted as case sensitive.

Do you know a way to deal with this that isn't

```sh
$> git mv FileName fileName__
$> git mv fileName__ fileName
$> git commit -m 'fixing the casing?'
```

## How to run this exercise?

You will need to install the dependencies first:

If you use `npm`:

```sh
$> npm instal
```

I wanted to use `yarn` which is a *better* `npm`

```sh
$> yarn
```

With the dependencies out of the way. Let's compile the code:

```sh
$> ./node_module/.bin/tsc
```

Finally, run the code! You could run it in iOS or Android...
Or Both!

```sh
$> react-native run-ios
$> react-native run-android
```
