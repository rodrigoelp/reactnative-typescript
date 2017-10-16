"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
var AppColors;
(function (AppColors) {
    AppColors["Text"] = "#dfe0e2";
    AppColors["ContainerBackground"] = "#848889";
    AppColors["Silver"] = "#848889";
    AppColors["Gold"] = "#ae8f63";
    AppColors["Crimson"] = "#8b233f";
})(AppColors = exports.AppColors || (exports.AppColors = {}));
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
//# sourceMappingURL=styles.js.map