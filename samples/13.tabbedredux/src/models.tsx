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

export { IAppState };