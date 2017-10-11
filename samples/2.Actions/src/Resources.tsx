
import { StyleSheet } from "react-native";

export enum AppColors {
    Lightest = "#f8b195",
    Light = "#f67280",
    Normal = "#c06c84",
    Dark = "#6c5b7b",
    Darkest = "#355c7d",
}

export const appStyles = StyleSheet.create({
    button: {
        backgroundColor: AppColors.Normal,
        borderColor: AppColors.Dark,
        margin: 10,
        padding: 5,
    },
    container: {
        alignItems: "center",
        backgroundColor: AppColors.Darkest,
        flex: 1,
        justifyContent: "center",
    },
    excitedText: {
        color: AppColors.Lightest,
        fontSize: 24,
        fontWeight: "bold",
        margin: 10,
        textDecorationStyle: "dashed",
    },
    normalText: {
        color: AppColors.Lightest,
        margin: 4,
    },
});
