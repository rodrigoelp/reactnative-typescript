import * as React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { List, ListItem } from "react-native-elements";
import { IUserListResult, IUser } from "./models";

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
            <View style={styles.container}>
                <List containerStyle={styles.listContainer}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={(item: IUser) => item.email}
                    />
                </List>
            </View>
        );
    }

    componentDidMount() {
        this.loadUsers();
    }

    renderItem = (item: IUser): JSX.Element => {
        return <ListItem roundAvatar title={`${item.name.first} ${item.name.last}`} subtitle={item.email} avatar={item.picture.thumbnail} containerStyle={styles.listItemContainer} />;
    }

    loadUsers = () => {
        const { page, seed, data } = this.state;
        this.setState({ loading: true },
            () => {
                this.requestUsersAsync(page, seed)
                    .then(res => {
                        this.setState({
                            data: page === 1 ? res.results : data.concat(res.results),
                            error: undefined,
                            loading: false,
                            refreshing: false,
                        } as IState);
                    })
                    .catch(error => {
                        this.setState({ error, loading: false, refreshing: false });
                    });
            }
        );
    }

    /* -------- */
    /* added logic here... created the method in a functional way so the `setState` happens somewhere else. */
    requestUsersAsync = (page: number, seed: number): Promise<IUserListResult> => {
        const serviceUrl = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        return fetch(serviceUrl)
            .then(res => res.json()) // this gives me all the data as type `any` which does not give me any type safety, nor intellisense.
            .then(res => res as IUserListResult); // assigns an interface to the respose so now there is a type
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 44,
        paddingBottom: 22,
    },
    listContainer: { // these conform with the ScrollViewStyle type
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    listItemContainer: {
        borderBottomWidth: 0,
    }
});

export { AppShell };
