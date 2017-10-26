
import { StyleSheet } from "react-native";

const header1FontSize = 24;
const header2FontSize = 18;
const textFontSize = 14;
const infoFontSize = 8;
const fontFamily = "HelveticaNeue";

export const appStyles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignContent: "center",
        paddingTop: 48,
        paddingLeft: 24,
        paddingRight: 24,
    },
    genericContainer: {
        flex: 1,
    },
    wrappingContainer: {
        flex: 1, flexWrap: "wrap", marginTop: 8
    },
    scoreContainer: {
        flex: 1, justifyContent: "flex-end", marginTop: 8
    },
    listItem: {
        flex: 1, margin: 10, padding: 10, alignContent: "stretch"
    },
    sectionHeader: {
        flexBasis: "auto",
        textAlign: "center",
        fontSize: header1FontSize,
        fontFamily
    },
    header1: {
        fontSize: header2FontSize, fontWeight: "bold",
        fontFamily
    },
    infoText: {
        fontSize: infoFontSize,
        fontFamily
    },
    text: {
        fontSize: textFontSize,
        fontFamily
    },
    scoreTitle: {
        fontWeight: "bold", textAlign: "right",
        fontFamily
    },
    score: {
        textAlign: "right", fontFamily
    }
});