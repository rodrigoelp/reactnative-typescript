
import { StyleSheet } from "react-native";

export enum AppColors {
    Text = "#dfe0e2",
    ContainerBackground = "#848889",
    Silver = "#848889",
    Gold = "#ae8f63",
    Crimson = "#8b233f",
}

export const appStyles = StyleSheet.create({
    appContainer: {
        alignItems: "stretch",
        backgroundColor: AppColors.ContainerBackground,
        flex: 1,
        flexDirection: "column",
    },
    defaultContainer: {
        alignItems: "stretch",
        flex: 1,
    },
    screenOneContainer: {
        backgroundColor: AppColors.Gold,
        flex: 1,
    },
    screenTwoContainer: {
        backgroundColor: AppColors.Crimson,
        flex: 1,
    },
     screenThreeContainer: {
        backgroundColor: AppColors.Silver,
        flex: 1,
    },
    hugeButton: {
        alignItems: "center",
        backgroundColor: AppColors.Gold,
        flex: 1,
        padding: 20,
    },
    hugeButtonText: {
        color: AppColors.Text,
        flex: 1,
        fontFamily: "HelveticaNeue-CondensedBold",
        fontSize: 24,
    },
    largeText: {
        color: AppColors.Text,
        flex: 1,
        fontFamily: "HelveticaNeue-CondensedBold",
        fontSize: 24,
    },
});
