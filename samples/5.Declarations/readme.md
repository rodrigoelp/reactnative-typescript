# Dealing with type declarations

Typescript has several aspects making it a superior programming language to plain javascript... but browsing around I have found several libraries that look pretty promising and I am not sure if those are already included into the [defined types](https://github.com/DefinitelyTyped/DefinitelyTyped) for typescript.

One example of these libraries that is not defined (yet) is [react-native-navigation](https://www.npmjs.com/package/react-native-navigation). Thankfully, the main [react-navigation](https://www.npmjs.com/package/react-navigation) library is well supported and easier to include into your project than `react-native-navigation`.

So, before I find one of those libraries without its types defined; I've decided to learn how to generate the type definition.

## What do we have here?

The `./lib/` folder contains two javascript files `{ geometry.js, people.js }` containing some definitions that we would like to use in our application `app.ts`.

At the moment, the file `sampletest.js` has all the functionality that I want to get to work in the `./src/app.ts` file. hopefully the libraries will be exported into a `people.d.ts` and `geometry.d.ts` files that will work with my app.

I started by reading [typescript's docos](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), then browsed a few examples to understand what I need to do.

Once done, I've identified at least two different ways that I need to tackle first:

```js
// object definition
var objectName = (function(){
    constructor()  { }
    return objectName;
})();

exports.objectName = objectName;
```

Or

```js
var moduleName = {
    objectName: (objectDefinitionAsAbove)(),
    functionName(args) { body },
}

exports.moduleName = moduleName;
```

Let's see how these go.

## Comments after writing the exercise

Some declarations and its usage was straight forward. The module declaration was sort of weird and I am still trying to find a better way of dealing with this.

My initial script was `sampletest.js`, which gave a framework to get the library into a shape that I wanted to work with.

From there I started generating `people.d.ts` and `geometry.d.ts` which I had to include __with__ my original `people.js` and `geometry.js` otherwise it was not working... But end up with the following questionsn that I need to do to an expert while I am learning:

1. Is there a way to generate the definition files and locate it in a different folder to the library?
1. What's the best way to export types included in a module?
1. What other types should I practice exporting?

## BTW!!!!

I did **not** include the `output/app.js` generated file from the `src/app.tsx`. If you want to check this works, remember to compile the code and then run node with the output.

```sh
$> npm install
$> ./node_modules/.bin/tsc
$> node output/app.js
```
