import * as React from "react";
import { Text, TextInput, View } from "react-native";
import { appStyles } from "../../Resources";
import { AppRouteNames } from "../AppNavigator";
import { Button } from "../Controls";
import { EditorMode, IEditorNavigationProp, IListParams, ITodoItem } from "../Interfaces";
import { Store } from "../Models/Store";
import { guid } from "../SystemTypes";

interface IEditorState {
    item: ITodoItem;
}

export default class EditorScreen extends React.Component<IEditorNavigationProp, IEditorState> {

    constructor(props: IEditorNavigationProp) {
        super(props);

        const todoItem = this.props.navigation.state.params.item;
        this.state = { item: todoItem === undefined ? Store.createNewItem() : todoItem };
    }

    public render() {
        const mode: EditorMode = this.props.navigation.state.params.mode;
        const actionToDo: string = mode === EditorMode.New ? "add a new task." : "edit this task.";
        return (
            <View style={appStyles.screenContainer}>
                <Text style={appStyles.header1}>
                    Let's {actionToDo}
                </Text>
                <TextInput
                    style={appStyles.textInput}
                    onChangeText={this.update}
                    value={this.state.item.title}
                />
                <View style={appStyles.optionsPanel}>
                    <Button text="Done" onPress={this.done} />
                    <Button text="Cancel" onPress={this.cancel} />
                </View>
            </View>);
    }

    private update = (text: string): void => {
        const oldItem = this.state.item;
        this.setState({
            item: {
                id: oldItem.id,
                title: text,
            },
        });
    }

    private done = (): void => {
        const currentItem = this.state.item;
        const store = this.props.navigation.state.params.store;
        store.replace(currentItem);
        this.props.navigation.navigate( AppRouteNames.ListOfTodos, { store });
    }

    private cancel = (): void => {
        this.props.navigation.goBack();
    }
}
