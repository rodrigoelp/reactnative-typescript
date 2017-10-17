"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
/**
 * Colours used in the application
 */
var AppColors;
(function (AppColors) {
    AppColors["Text"] = "#dfe0e2";
    AppColors["ContainerBackground"] = "#848889";
    AppColors["Silver"] = "#848889";
    AppColors["Gold"] = "#ae8f63";
    AppColors["Crimson"] = "#8b233f";
    AppColors["AlmostBlack"] = "#1f101a";
    AppColors["PinkishGold"] = "#c3c3c4";
    AppColors["PooBrown"] = "#ad8c7b";
    AppColors["Brown"] = "#6b4633";
    AppColors["DarkBrown"] = "#322422";
    AppColors["LightBrownInRoomWithoutLight"] = "#070808";
})(AppColors = exports.AppColors || (exports.AppColors = {}));
/**
 * styles used in the application.
 */
exports.appStyles = react_native_1.StyleSheet.create({
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
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    smallInfoPanel: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
//# sourceMappingURL=styles.js.map