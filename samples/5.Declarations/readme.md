# Dealing with type declarations

Typescript has several aspects making it a superior programming language to plain javascript... but browsing around I have found several libraries that look pretty promising and I am not sure if those are already included into the [defined types](https://github.com/DefinitelyTyped/DefinitelyTyped) for typescript.

One example of these libraries that is not defined (yet) is [react-native-navigation](https://www.npmjs.com/package/react-native-navigation). Thankfully, the main [react-navigation](https://www.npmjs.com/package/react-navigation) library is well supported and easier to include into your project than `react-native-navigation`.

So, before I find one of those libraries without its types defined; I've decided to learn how to generate the type definition.

## What do we have here?

The `./lib/` folder contains two javascript files `{ geometry.js, people.js }` containing some definitions that we would like to use in our application `app.ts`.

At the moment, the file `sampletest.js` has all the functionality that I want to get to work in the `./src/app.ts` file. hopefully the libraries will be exported into a `people.d.ts` and `geometry.d.ts` files that will work with my app.

I started by reading [typescript's docos](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html), tend browsed a few examples to understand what I need to do.

Once done, I've identified at least two different ways that I need to tackle first:

```javascript
// object definition
var objectName = (function(){
    constructor()  { }
    return objectName;
})();

exports.objectName = objectName;
```

Or

```javascript
var moduleName = {
    objectName: (objectDefinitionAsAbove)(),
    functionName(args) { body },
}

exports.moduleName = moduleName;
```

Let's see how these go.