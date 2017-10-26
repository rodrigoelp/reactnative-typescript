
import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    appContainer: {
        alignContent: "stretch",
        backgroundColor: "lightblue",
        flex: 1,
        justifyContent: "space-between",
        paddingBottom: 30,
        paddingLeft: 24,
        paddingRight: 24,
        paddingTop: 48,
    },
    bottomBox: {
        flexBasis: "auto",
        flexDirection: "row",
        height: 40,
        justifyContent: "space-between",
    },
    centerBox: {
        alignContent: "center",
        flex: 1,
        justifyContent: "center",
    },
    header: {
        fontSize: 30,
        marginBottom: 16,
        textAlign: "center",
    },
    reallyLargeText: {
        fontSize: 120,
        textAlign: "center",
        textShadowColor: "gray",
        textShadowOffset: { width: 0, height: 0},
        textShadowRadius: 18,
    },
    text: {
        fontSize: 20,
    },
});
