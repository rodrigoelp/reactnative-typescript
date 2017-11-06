# Typography v2. Checking against the system

Typography v1.0 has a clear issue... The list is included manually and it might not be up to date.

If only a could check directly with the OS and obtain a list of registered fonts. Oh wait... I can!

iOS exposes all the fonts used by `UIKit`:

```swift
// In swift it would be something like this.
import UIKit

class FontLookup {
    func getFonts() -> [String] {
        return UIFont.familyNames
    }
}
```

I got no idea how to get it for Android, but I imagine is going to be pretty easy too, _right_?

In any case, `react-native` should allow me to expose it to my javacript/typescript code... Reading the documentation, I noticed three things right out of the bat:

1. Whatever you do, it will need to be exported or registered with the react-native framework (expected)
1. Any method receives the same treatment. If your method returns a value, it will have to be returned via a callback or a promise provided as an argument.
1. There is a list of supported types:
    1. For iOS:
        1. ObjC: `NSString` or Swift's: `string` maps to `string`
        1. ObjC: `CGFloat`/`NSNumber` or Swift's: `float`, `double` maps to `number`
        1. ObjC: `BOOL` maps to `boolean`
        1. ObjC: `NSArray` maps to `Array`
        1. ObjC: `NSDictioanary` (strings as keys) maps to a hashset.
        1. You can also provide a function which is `RCTResponseSenderBlock` or `RCTPromiseResolveBlock`/ `RCTPromiseRejectBlock`
    1. For Android:
        1. `Bool` maps to `boolean`
        1. `Integer`, `Double`, `Float` maps to `number`
        1. `String` maps to `string`
        1. `Callback` to `function`
        1. `List<T>`, `ArrayList<T>`, etc... **maps to nothing!** You have to export it manually via `Arguments.fromList(...)` or similar methods. You will have it via `WritableArray` or `WritableMap` if you are sending info to Javascript or `ReadableArray`, `ReadableMap` if you are sending it to Android via Java or Kotlin.

I've found these inconsistencies quite annoying... but, moving on.

## What does all this mean?

Let's build the application and take a look how to work with it!

The objective is to build an application similar to typography v1.0 but making it completely dynamic.

Now, to create the api I am going to use the `promises` approach. This means in objc I need to add a method with two arguments `RCTPromiseResolveBlock` and `RCTPromiseRejectBlock`. In Java, the method will take in a promise that will be marked as rejected or resolved.

I am going to try to build the interface as close as possible to minimise differences in my javascript code. Hopefully, I won't have to create a wrapper to address differences.

## What did I find once it was completed?

Well... Android reports a set of 29 font families (9 are `sans-serif` variations and 2 are `serif`, everything else is different) and iOS reported 78 font families (very different to the 294 reported on the list that does not crash the application).

Unfortunately, passing complex objects is not supported at all (discovered this while paying with early implementations of this app). I wish facebook decides to revise this api and make it better... for one, provide a mechanism to serialize objects into json and automatically reads it into an object on the other side. At the moment, this will work only if you manually serialise everything and pass it through as a `string`.