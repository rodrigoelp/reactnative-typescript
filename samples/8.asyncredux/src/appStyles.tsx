import { StyleSheet } from "react-native";

const appStyles = StyleSheet.create({
    container: {
        alignItems: "stretch",
        flex: 1,
    },
    containerApp: {
        alignItems: "stretch",
        flex: 1,
    },
    containerBody: {
        flex: 1,
        paddingLeft: 8,
        paddingRight: 8,
    },
    containerFooter: {
        backgroundColor: "red",
        padding: 16,
    },
    containerHeader: {
        flexBasis: "auto",
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 48,
    },
    containerPostItem: {
        flex: 1,
        paddingBottom: 16,
        paddingTop: 8,
    },
    textFooter: {
        alignSelf: "center",
        color: "white",
        fontSize: 10,
    },
    textInfo: {
        fontSize: 10,
    },
    textPostPreviewBody: {
        fontFamily: "Helvetica Neue",
        fontSize: 14,
    },
    textPostTitle: {
        fontFamily: "Helvetica",
        fontSize: 24,
    },
});

export default appStyles;
