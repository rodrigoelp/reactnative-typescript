# React Native app + Typescript + Redux. What can go wrong?

Getting started with `react-native` gives you some work to catch up with its concepts and framework (especially to those that have been working in iOS, Windows and Android natively for a long time... like me) and to complicate things a bit more, everybody tells you to check out [`redux`](http://redux.js.org/) (including [facebook](http://facebook.github.io/react-native/releases/0.49/docs/more-resources.html#development-tools)).

So, this is my head dive into `redux`.

## Where to start?

Installing the modules for your application to use. Interestingly enough, `redux-thunk` had already its type definition.

### Checking `packages.json`

I can see I have installed all the modules we have seen before: `react`, `react-native` and its type definitions. But, I have also included `redux` (main library), `react-redux` (so react can work with redux, I guess), and `redux-thunk` which I am not quite clear what it does (other than helping noobs like me).

### What do I need to get the app to work?

After checking the redux docos and some tuts, I understand that I need to:

1. Create some reducers that will encapsulate how the data exists and changes *over time*. This means the data itself does not change, it creates copies including the changes, creating some sort of time series that I can visit later on.
1. Create a store that takes in the reducers.
1. Create an app, hosting a `Provider` component that takes the store we created before.
1. Host in the `Provider` the `App` 'dumb' component that will point to a **'container'** which is a component that knows how to map its state in the store to its properties.
1. Create a container (pretty similar to a component).
1. On the same container file, create the function `mapStateToProps` which is a function `(store_state) => props`. This function will map the entire state of the store and create the properties your container will consume. For example, if your store was defined with a reducer as follows `{ userInfo: userInfoReducer, availableSongs: songsReducer, cart: cartReducer }` and all you want to display is the list of available songs, then your map will be `function mapStateToProps(state) { return { songs: state.availableSongs }; }` (although I need to know how to do this in typescript).
1. On the same file, tell `redux` you want to connect the store with your container by calling `export default connect(mapStateToProps)(ContainerName)`.
1. Change the container to expose the appropriate visual component that will display the information. All the information exposed from the complete store to the props done on step 4
1. Create your actions: set of functions (action creators) that will indicate the type of the action (the trigger) and the payload or the information that triggered the action. That action is what is fed into the reducer (coming to full cycle), at this point we might want to change our reducers to return a different state when a type is provided to it)...
1. Now you will need to connect the action to the container by calling `bindActionCreators` with the `dispatch` as: `function matchDispatchToProps(dispatch) { return bindActionCreators({ actionName: action }, dispatch); }`
1. Change `connect` to take in the `matchDispatchToProps` as follows: `connect(mapStateToProps, matchDispatchToProps)(ContainerName)`. This will expose the action to your component by adding it to its properties.
1. Changing the reducers to create new states based on actions. What it means is, either I create a new reducer (for instance, if I am selecting a song to add to my shopping cart, then my `cartReducer` will receive the action of type `songSelected` and append it to the list of songs in the cart and return the new object).