# React-Native + Typescript + Redux + Async actions

On the previous [exercise](../7.counterredux/), I was trying to understand the basics of redux, and it looks all good so far.

But... **How do we tackle async operations?**

In order to build any successful application<sup>([1](#label1))</sup>, its philosophy/design should be discernible, the application should be stable and (and this one is quite important) it must **be responsive**.

That's the point where async actions comes into play.

## What are we building on this exercise?

A pretty simple feeder app, all the information is posted on a rest api, all we need to do is consume it and present it to the user.

Eventually (not on this exercise though), we will try to build a feed stream that you can tap on items to get more details, and read the comments of each post (maybe even persist a local cache?)... but we need to start somewhere.

## How far are we going to take the implementation?

Just enough to understand the role of the store, action creator and reducers when there is async actions/calls.

## Where is the restful service?

A few years ago, I stumbled across this site called [typicode](https://jsonplaceholder.typicode.com/) that is exposing a json rest service.

The reason why I like this service in particular is that I got no control over the model, in a way that is kind of bad as the creator could change it without me noticing it, but it reflects a common practice in software development: we depend on thrid party services out of our control.

The service exposes data such as:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere ...",
  "body": "quia et suscipit\nsuscipit ..."
}
```

And as an added bonus, you get delays in the communication (small... but enough for you to notice it)

([taken from here](https://jsonplaceholder.typicode.com/posts/1))

## Based on the documention, what do we need to do?

Assuming a pre-existing app using `redux`, we will need to adapt our action creator so it returns a function taking in the dispatcher. This is the first step.

Next, we will need to change the implementation of the action creator to communicate with each of the reducers by dispatching an action:

`dispatch({ type: "CHANGE_STATE", payload: somepayload });`

A third step is to create a middleware that will handle the the action creator and provide the dispatcher to it.

Obviously, we will need to add/change/adapt our reducers to take some new types as we will be having some kind of indication the application is doind something, it just finished doing that something or that it failed doing it. But just to get redux to work with async actions, just the three steps should be sufficient.

## Middleware?

After reading about it and trying to understand what middleware really is...

I mean, I know the definition `a bridge between systems`... but what is it meant to do? What is exactly bridging?

Simply put, is *an interceptor* of any dispatched action and the reducers applied to the store.

When your action creator is created as:

```typescript
const actionCreator = () => (dispatch: Dispatch<any>) => {
    // some async code here.
}
```

Redux plumming does not really know how to deal with

```typescript
(Dispatch<any>) => any
```

It might try to call it... but what does it need to provide as an argument? It knows how to deal with

```typescript
() => { type: string }
```

In our case, this intercept is going to notice the result of the action creator is a lambda taking in a dispatch and it will pass it through.

Luckily, this middleware has already been written and is called `redux-thunk`

### How do we apply the middleware?

At some point, I created a store

```typescript
import { createStore } from "redux";
import { reducers } from "./reducers";

const store = createStore(reducers);
```

So, let's introduce the middleware that injects the `dispatch` as an argument to the action creator.

```typescript
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducers } from "./reducers";

const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);
```

And that is all...

Well...

... that is kind of it.

## Learnings of this exercise?

Writing this exercise I introduced a bug that prevented the code from working as expected. Here it is:

```typescript
// File: appShell.tsx

class AppShell.... { } // not important.

function mapStateToProps { return { ... } } // not important.

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        doMath: mathActionCreator, // sync
        doSomething: doSomethingAsyncActionCreator, // async
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);
```

The result of this is, `doMath()` works, but `doSomething()` does not. What the hell???

But it kind of worked if I tweaked my dispatcher to capture the dispatch, check the commit history and you will find I created my action creator as `(dispatch) => () => any` instead of `() => (dispatch) => any` and changed the code wiring the dispatch to the component as follows:

```typescript
// File: appShell.tsx

class AppShell.... { } // not important.

function mapStateToProps { return { ... } } // not important.

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        doMath: mathActionCreator, // sync
        doSomething: doSomethingAsyncActionCreator(dispatch), // async
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);
```

Now is working... but not the way it should.

Did you notice my mistake?

Yeah, I didn't notice it for two whole days... the beauty of learning a new platform/framework. I completely forgot to call the `bindActionCreator` function with my action creators.

```typescript
// File: appShell.tsx

...

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return bindActionCreator({ // <== why isn't this more obvious?
        doMath: mathActionCreator, 
        doSomething: doSomethingAsyncActionCreator, 
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);
```

...

_Sign..._

...

So, I ask myself... why was it even working in the first place?

The doco says: `"bindActionCreator turns an object whose values are action creators, into an object with the same keys but its action creators wrapped into a dispatch"`

Unfortunately, type safety did not work here 😭

In any case, this is going to create a scar it won't go away easily.

_Notes:_

<sup><a id="label1">(1)</a> - The definition of successful application is arguable. Although, let's consider a sucessful application as: an application the user wants to use, understands its philosophy and gets some enjoyment, pleasure or completion of an objective.</sub>
