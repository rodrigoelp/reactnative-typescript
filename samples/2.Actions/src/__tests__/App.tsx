
import * as React from "react";
import "react-native";
import App from "../App";

import * as renderer from "react-test-renderer";

it("renders correctly", () => {
    const tree = renderer.create(
        <App />,
    );
});
