import { StyleSheet } from "react-native";

enum Colors {
    Separator= "#CED0CE",
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 22,
    },
    listContainer: { // these conform with the ScrollViewStyle type
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    listItemContainer: {
        borderBottomWidth: 0,
    },
    separator: {
        height: 1,
        width: "84%",
        backgroundColor: Colors.Separator,
        marginLeft: "16%"
    },
    loadingContainer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: Colors.Separator,
    }
});

export { Colors, styles };