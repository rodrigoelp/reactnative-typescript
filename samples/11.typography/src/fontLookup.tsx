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
    // Given I coded both interfaces to match the definition above, I don't
    // need to continue calling platform.select
    return NativeFontLookup.getFontFamilies()
        .then((fonts) => fonts.sort((a, b) => a.localeCompare(b)));
}

export { NativeFontLookup, fetchSystemFonts };