import { NativeModules, Platform } from "react-native";

// This module contains the implementation necessary to read native functions
// in the javascript part.

/**
 * Interface of the native module exposed from the native app.
 */
interface IFontLookup {
    getFontFamilies: () => Promise<string[]>;
}

const NativeFontLookup = NativeModules.FontLookup as IFontLookup;

function fetchSystemFonts(): Promise<string[]> {
    const emptyList: string[] = [];
    return Platform.select({ // done like this to prevent failure in android whilst we prepare the android solution.
        ios: NativeFontLookup.getFontFamilies(),
        android: Promise.resolve(emptyList)
    });
}

export { NativeFontLookup, fetchSystemFonts };