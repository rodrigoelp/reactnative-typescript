import { StyleSheet, Platform } from "react-native";

enum Colours {
    First = "#848889",
    Second = "#dfe0e2",
    Third = "#ae8f63",
    Fourth = "#8b233f",
}

const appFontFamily = Platform.select({
    ios: "Zapfino",
    android: "Roboto",
});
const appFontSize = 30;
const iconMaxSize = 26;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    firstScreen: {
        backgroundColor: Colours.First,
    },
    secondScreen: {
        backgroundColor: Colours.Second,
    },
    thirdScreen: {
        backgroundColor: Colours.Third,
    },
    fourthScreen: {
        backgroundColor: Colours.Fourth,
    },
    labelOnDarkBackground: {
        fontFamily: appFontFamily,
        fontSize: appFontSize,
        color: Colours.Second,
    },
    labelOnLightBackground: {
        fontFamily: appFontFamily,
        fontSize: appFontSize,
        color: Colours.First,
    },
    icon: {
        width: iconMaxSize,
        height: iconMaxSize,
    }
});

export { Colours, styles };