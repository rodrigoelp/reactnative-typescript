/**
 * Describing the state I want to track in my application.
 * Pretty simple at the moment, the current count and that nav object that
 * is injected into the navigator (I am not clear what its role is)
 * 
 * This definition gives me an idea of what I want my store to have.
 * Next, I will be creating the reducers to operate on each of these sections.
 */
interface IAppState { // remember, every time this object changes shape, you need to update the store to provide the same name.
    currentCount: number;
    rootNavigator: any;
    secureNavigationState: any;
}

/**
 * The Action types define the possible action.type passed to reducers.
 * 
 * These types are used by containers, components or action creators to communicate
 * with the reducers to change the state of the application.
 * 
 * I personally think that single constants are a horrible way of keeping these
 * immutable/invariable values in your code. The enumeration (just like an object)
 * will give you a logical grouping to your constants as well as convey meaning
 * to what you want to do with it.
 */
enum ActionType {
    UserLoggedIn = "Navigate_To_Secure",
    UserLoggedOut = "Navigate_To_Login",
}

export { IAppState, ActionType };