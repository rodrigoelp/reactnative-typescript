import { StyleSheet, Platform } from "react-native";

enum Colours {
    First = "#848889",
    Second = "#dfe0e2",
    Third = "#ae8f63",
    Fourth = "#8b233f",
    AppBackground = "#66BFBF",
    HeaderBackground = "#F76B8A",
    Header = "#FCFEFE",
    ItemBackground = "#EAF6F6",
    Item = "#66BFBF",
}

const appFontFamily = Platform.select({
    ios: "Zapfino",
    android: "Roboto",
});
const appFontSize = 56;
const iconMaxSize = 26;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    fullViewContainer: {
        flex: 1
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
    },
});

const sectionStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: Colours.AppBackground,
        paddingTop: 40,
    },
    headerContainer: {
        backgroundColor: Colours.HeaderBackground,
        padding: 8,
    },
    headerTitle: {
        color: Colours.Header,
        fontSize: 30,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8
    },
    item: {
        fontSize: 18,
        color: Colours.Item,
    },
    info: {
        fontSize: 12,
        paddingBottom: 4,
    },
    appTitle: {
        fontSize: 14,
        paddingRight: 16,
        textAlign: "right",
    }
});

export { Colours, styles, iconMaxSize, sectionStyles };