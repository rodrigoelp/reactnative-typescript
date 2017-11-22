import * as React from "react";
import { FlatList, Text, View, StyleSheet, ActivityIndicator } from "react-native";
import { List, ListItem,SearchBar  } from "react-native-elements";
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
            seed: 1,
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                <List containerStyle={styles.listContainer}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item: IUser) => item.email}
                        renderItem={({ item }) => this.renderItem(item)}
                        ItemSeparatorComponent={this.renderItemSeparator}
                        ListHeaderComponent={this.renderHeader}
                        ListFooterComponent={this.renderFooter}
                        onEndReachedThreshold={50}
                        onEndReached={this.loadMoreUsers}
                        refreshing={this.state.refreshing}
                        onRefresh={this.handleRefresh}
                    />
                </List>
            </View>
        );
    }

    componentDidMount() {
        this.loadUsers();
    }

    renderItem = (item: IUser): JSX.Element => {
        return <ListItem roundAvatar={true} title={`${item.name.first} ${item.name.last}`} subtitle={item.email} avatar={item.picture.thumbnail} containerStyle={styles.listItemContainer} />;
    }

    renderItemSeparator = (): JSX.Element => {
        return <View style={styles.separator} />
    }

    renderHeader = (): JSX.Element => {
        return <SearchBar placeholder="Type to search." lightTheme={true} round={true} />
    }

    renderFooter = (): JSX.Element => {
        if (this.state.loading === false) return <View />;
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator animating={true} size="large" />
            </View>
        );
    }

    loadMoreUsers = () => {
        this.loadUsers(this.state.page + 1);
    }

    handleRefresh = () => {
        this.setState({
            page: 1,
            seed: this.state.seed + 1,
            refreshing: true,
            data: []
        }, () => {
            this.loadUsers();
        });
    }

    loadUsers = (pageToFetch?: number) => {
        const { page, seed, data, refreshing } = this.state;
        pageToFetch = pageToFetch || page;
        this.setState({ page: pageToFetch!, loading: true },
            () => {
                this.requestUsersAsync(pageToFetch!, seed)
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

enum Colors {
    Separator= "#CED0CE",
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
    },
    separator: {
        height: 1,
        width: "84%",
        backgroundColor: Colors.Separator,
        marginLeft: "16%"
    },
    loadingContainer: {
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: Colors.Separator,
    }
});

export { AppShell };
