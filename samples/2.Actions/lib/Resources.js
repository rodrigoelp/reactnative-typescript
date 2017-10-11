"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
var AppColors;
(function (AppColors) {
    AppColors["Lightest"] = "#f8b195";
    AppColors["Light"] = "#f67280";
    AppColors["Normal"] = "#c06c84";
    AppColors["Dark"] = "#6c5b7b";
    AppColors["Darkest"] = "#355c7d";
})(AppColors = exports.AppColors || (exports.AppColors = {}));
exports.appStyles = react_native_1.StyleSheet.create({
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
//# sourceMappingURL=Resources.js.map