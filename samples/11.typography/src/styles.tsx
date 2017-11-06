import { StyleSheet } from "react-native";

const colorAppBackground = "#66BFBF";
const colorHeaderBackground = "#F76B8A";
const colorHeader = "#FCFEFE";
const colorItemBackground = "#EAF6F6";
const colorItem = "#66BFBF";

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colorAppBackground,
        paddingTop: 40,
    },
    itemContainer: {
        flex: 1,
        backgroundColor: "white",
        padding: 8,
    },
    headerContainer: {
        backgroundColor: colorHeaderBackground,
    },
    headerTitle: {
        color: colorHeader,
        fontSize: 30,
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 8,
        paddingRight: 8
    },
    item: {
        fontSize: 18,
        color: colorItem,
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

export { styles };