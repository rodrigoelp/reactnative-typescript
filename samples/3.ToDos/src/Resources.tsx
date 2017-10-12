
import { StyleSheet } from "react-native";

export enum AppColors {
    Bright = "#d75c37",
    Lightest = "#f5f5f5",
    Light = "#c3d7df",
    Normal = "#c06c84",
    Dark = "#6991ac",
    Darkest = "#67727a",
    // Text = "#f5f5f5",
    Text = "white",
    Background = "#6991ac",
    ButtonBackground = "#d75c37",
}

export const appStyles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.ButtonBackground,
        borderColor: AppColors.ButtonBackground,
        borderRadius: 3,
        borderWidth: 1,
        margin: 10,
        padding: 5,
    },
    buttonText: {
        color: AppColors.Text,
        margin: 4,
    },
    excitedText: {
        color: AppColors.Text,
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        textDecorationStyle: "dashed",
    },
    header1: {
        color: AppColors.Text,
        fontSize: 24,
        fontWeight: "bold",
        justifyContent: "center",
        margin: 10,
        textAlign: "center",
    },
    list: {
        backgroundColor: AppColors.Light,
        bottom: 0,
        flex: 1,
        left: 0,
        marginLeft: 10,
        marginRight: 10,
        right: 0,
        top: 0,
    },
    listContentContainer: {
        alignItems: "stretch",
        flex: 1,
        justifyContent: "center",
    },
    normalText: {
        color: AppColors.Text,
        margin: 4,
    },
    optionsPanel: {
        alignItems: "flex-end",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: 10,
        marginBottom: 25,
    },
    screenContainer: {
        alignItems: "stretch",
        backgroundColor: AppColors.Background,
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
    },
    shell: {
        alignItems: "flex-start",
        backgroundColor: AppColors.Background,
        flex: 1,
        justifyContent: "center",
    },
    textInput: {
        backgroundColor: AppColors.Lightest,
        borderColor: AppColors.Dark,
        borderWidth: 1,
        height: 45,
        margin: 10,
    },
});
