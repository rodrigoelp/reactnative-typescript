/**
 * With the screens defined, we now know there are two possible routes we can do.
 */
enum RouteNames {
    One = "/one", // this one includes a log-in function
    Two = "/two" // this contains the authenticated area.
}

/**
 * Defined routes for a tab navigation used once the user has logged in.
 */
enum SubRoutes {
    One = "/two/one",
    Two = "/two/two",
    Three = "WhatKeepsThePlanetSpinning?" // just to illustarte the name does not matter, it just need to be unique for that navigator.
}

export { RouteNames, SubRoutes };