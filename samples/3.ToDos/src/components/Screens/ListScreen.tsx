import * as React from "react";
import { Alert, FlatList, Text, View } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { appStyles } from "../../Resources";
import { AppRouteNames } from "../AppNavigator";
import { Button } from "../Controls";
import { EditorMode, IEditorParams, IListNavigationProp, ITodoItem } from "../Interfaces";

export default class ListScreen extends React.Component<IListNavigationProp> {
    constructor(props: IListNavigationProp) {
        super(props);
    }

    public render() {
        const store = this.props.navigation.state.params.store;
        const allItems = store.getAll();
        return (
            <View style={appStyles.screenContainer}>
                <Text style={appStyles.header1}>
                    Today's list of tasks to complete: {allItems.length}
                </Text>
                <FlatList
                    style={appStyles.list}
                    data={allItems}
                    renderItem={({ item }) => this.templateForItem(item)}
                    keyExtractor={(item: ITodoItem, index: number) => item.id.ToString()} />
                <View style={appStyles.optionsPanel}>
                    <Button text="Add" onPress={this.addNewItem} />
                </View>
            </View>
        );
    }

    // things to avoid.
    // declaring the lambda below as a function causes descoping of 'this'
    // meaning, 'this' is going to be different to the current instance.
    private addNewItem = (): void => {
        const store = this.props.navigation.state.params.store;

        this.props.navigation.navigate(
            AppRouteNames.ItemEditor,
            { mode: EditorMode.New, store } as IEditorParams,
        );
    }

    private templateForItem = (item: ITodoItem): JSX.Element => {
        return (
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-start"}}>
                <Text style={appStyles.normalText}>{item.title}</Text>
                <Button text="Delete" onPress={() => this.deleteItem(item)} />
            </View>
        );
    }

    private deleteItem = (item: ITodoItem): void => {
        const store = this.props.navigation.state.params.store;
        store.drop(item);
        this.setState({}); // forcing the update.
    }
}
