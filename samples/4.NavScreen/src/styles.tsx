
import { StyleSheet } from "react-native";

/**
 * Colours used in the application
 */
export enum AppColors {
    Text = "#dfe0e2",
    ContainerBackground = "#848889",
    Silver = "#848889",
    Gold = "#ae8f63",
    Crimson = "#8b233f",
    AlmostBlack = "#1f101a",
    PinkishGold = "#c3c3c4",
    PooBrown = "#ad8c7b",
    Brown = "#6b4633",
    DarkBrown = "#322422",
    LightBrownInRoomWithoutLight = "#070808",
}

/**
 * styles used in the application.
 */
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
        backgroundColor: AppColors.Crimson,
        flex: 1,
    },
    screenTwoContainer: {
        backgroundColor: AppColors.Brown,
        flex: 1,
    },
     screenThreeContainer: {
        backgroundColor: AppColors.DarkBrown,
        flex: 1,
    },
    infoPanel: {
        flex: 3,
        alignItems: "center", // horizontal alignment
        justifyContent: "center", //vertical alignment
        padding: 20,
    },
    smallInfoPanel: {
        flex: 1,
        alignItems: "center", // horizontal alignment
        justifyContent: "center", //vertical alignment
        padding: 20,
    },
    optionsPanel: {
        flex: 2,
        padding: 20,
    },
    bottomButtonPanel: {
        flex: 1,
        flexDirection: "row",
        padding: 20,
    },
    bigGoldenButton: {
        flex: 1,
        backgroundColor: AppColors.Gold,
        borderColor: AppColors.AlmostBlack,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 16,
        borderStyle: "solid",
        margin: 8,
    },
    buttonTouchableContent: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    largeButtonText: {
        fontFamily: "HelveticaNeue-Thin",
        fontSize: 24,
        color: AppColors.Text,
    },
    largeText: {
        color: AppColors.Text,
        fontFamily: "HelveticaNeue-CondensedBold",
        fontSize: 24,
    },
});
