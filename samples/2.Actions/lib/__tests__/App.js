"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
require("react-native");
const App_1 = require("../App");
const renderer = require("react-test-renderer");
it("renders correctly", () => {
    const tree = renderer.create(React.createElement(App_1.default, null));
});
//# sourceMappingURL=App.js.map