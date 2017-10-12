import * as React from "react";
import { AppRegistry } from "react-native";
import { StackNavigator } from "react-navigation";
import { AppNavigator, AppRouteNames } from "./components/AppNavigator";
import { IListParams } from "./components/Interfaces";
import EditorScreen from "./components/Screens/EditorScreen";
import ListScreen from "./components/Screens/ListScreen";

AppRegistry.registerComponent("ToDo", () => AppNavigator);
