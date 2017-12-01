# Tabbed Navigation with Redux

The idea fulling this exercise is to determine how navigation works (properly) with redux, a tabbed app would be just an easy target to achieve this.

## By now, I have grown used to do...

The standard configuration (depends on some libraries) of a project can be replicated as follows:

```sh
# creating the project.
$ react-native init <projectname>
# getting ready to do more work in the project (configuration)
$ cd <projectname>
# adding typescript locally, making the project portable.
$ yarn add typescript -dev
# creating the typescript project configuration. Once this step is done, I also edit the tsconfig.json file to
# add the "include": [ "./src/" ] section after the configuration.
$ ./node_modules/.bin/tsc --init --pretty --target es2017 --jsx react --sourceMap --module commonjs --outdir ./lib/
# creating the source folder
$ mkdir src
# adding type definitions required to compile typescript files
$ yarn add @types/react @types/react-native
# adding navigation and its type definition
$ yarn add react-navigation @types/react-navigation
# adding redux for react and its type definition...
# notice I am not leaving @types/redux out by mistake. 'redux' includes
# its type definition by default (awesome libraries do this by default ☺️ )
$ yarn add redux react-redux @types/react-redux
# adding vector graphics.
$ yarn add react-native-vector-icons @types/react-native-vector-icons
# hooking up the fonts and the configuration for iOS and Android
$ react-native link
# removing files that I do not need
$ rm -rf .flowconfig App.js index.js
# creating some required files
$ touch ./src/index.tsx
$ echo 'import "./lib";' > index.js
```
