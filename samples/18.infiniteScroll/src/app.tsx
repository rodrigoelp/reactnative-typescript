import * as React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";

// this definition is equals to `{}` which I could have used when declaring the AppShell...
// decided against it to be more clear.
// Note: Linter does not like this and will suggest you to replace the usage of the interface
// to `{}`
interface IProps { }

interface IState { // this defines the shape of the state we are going to be using in the component.
    loading: boolean;
    refreshing: boolean;
    data: any[],
    page: number,
    seed: number,
    error?: Error
}

// This component contains the entry point to the application.
// alternatively, the declaration could have been `export class AppShell extends...` but I prefer
// to declare all my exports together at the bottom.
class AppShell extends React.Component<IProps, IState> {
    /**
     * Initializes an instance of AppShell.
     */
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: false,
            refreshing: false,
            data: [],
            page: 1,
            seed: 1
        };
    }

    public render() {
        return (
            <List containerStyle={styles.listContainer}>
                <FlatList data={this.state.data} renderItem={({ item }) => this.renderItem(item)} />
            </List>
        );
    }

    componentDidMount() {
    }

    renderItem = (item: any): JSX.Element => {
        return <ListItem roundAvatar title="" subtitle="" avatar={{}} containerStyle={{}} />;
    }
}

const styles = StyleSheet.create({
    listContainer: { // these conform with the ScrollViewStyle type
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    listItemContainer: {
        borderBottomWidth: 0,
    }
});

export { AppShell };
