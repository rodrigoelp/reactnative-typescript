import * as React from "react";
import { FlatList, Text, View, ActivityIndicator } from "react-native";
import { NavigationScreenProps, NavigationScreenOptions } from "react-navigation";
import { List, ListItem, SearchBar } from "react-native-elements";
import { IUserDetailsProps } from "./userDetails";
import { styles } from "./styles";
import { IUserListResult, IUser, RouteNames, IUniqueUser } from "./models";
import { newUid } from "./functions";

// this definition is equals to `{}` which I could have used when declaring the AppShell...
// decided against it to be more clear.
// Note: Linter does not like this and will suggest you to replace the usage of the interface
// to `{}`
interface IProps extends NavigationScreenProps<{}> { }

interface IState { // this defines the shape of the state we are going to be using in the component.
    loading: boolean;
    refreshing: boolean;
    data: IUniqueUser[],
    filteredData: IUniqueUser[],
    page: number,
    seed: number,
    filter: string,
    error?: Error
}

// This component contains the entry point to the application.
// alternatively, the declaration could have been `export class AppShell extends...` but I prefer
// to declare all my exports together at the bottom.
class AppShell extends React.Component<IProps, IState> {
    static navigationOptions: NavigationScreenOptions = {
        title: "Welcome to Usr!"
    };
    /**
     * Initializes an instance of AppShell.
     */
    constructor(props: IProps) {
        super(props);

        this.state = {
            loading: false,
            refreshing: false,
            data: [],
            filteredData: [],
            page: 1,
            seed: 1,
            filter: "",
        };
    }

    public render() {
        return (
            <View style={styles.container}>
                <List containerStyle={styles.listContainer}>
                    <FlatList
                        data={this.state.filteredData}
                        keyExtractor={(item: IUniqueUser) => item.uid}
                        renderItem={({ item }) => this.renderItem(item)}
                        ItemSeparatorComponent={this.renderItemSeparator}
                        ListHeaderComponent={this.renderHeader}
                        ListFooterComponent={this.renderFooter}
                        onEndReachedThreshold={100}
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
        return <ListItem
            roundAvatar={true}
            title={`${item.name.first} ${item.name.last}`}
            subtitle={item.email}
            avatar={item.picture.thumbnail}
            containerStyle={styles.listItemContainer}
            onPress={() => this.showUser(item)}
        />;
    }

    renderItemSeparator = (): JSX.Element => {
        return <View style={styles.separator} />
    }

    renderHeader = (): JSX.Element => {
        return <SearchBar placeholder="Type to search." onChangeText={this.handleFilter} lightTheme={true} round={true} />
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
        console.log("refreshing the application");
        this.setState({
            page: 1,
            seed: this.state.seed + 1,
            refreshing: true,
            data: []
        }, () => {
            this.loadUsers();
        });
    }

    handleFilter = (text: string) => {
        console.log("Filtering information");
        const { data } = this.state;
        text = text.toLocaleLowerCase();
        let filtered = data;
        if (text !== "") {
            filtered = data.filter(
                (user) => user.name.first.startsWith(text) || user.name.last.startsWith(text) || user.email.startsWith(text)
            );
        }

        this.setState({
            filter: text,
            filteredData: filtered
        });
    }

    showUser = (user: IUser) => {
        const params: IUserDetailsProps = { user };
        this.props.navigation.navigate(RouteNames.UserDetails, params);
    }

    loadUsers = (pageToFetch?: number) => {
        console.debug(`Fetching page ${pageToFetch}`);
        const { page, seed, data, refreshing } = this.state;
        pageToFetch = pageToFetch || page;
        this.setState({ page: pageToFetch!, loading: true },
            () => {
                this.requestUsersAsync(pageToFetch!, seed)
                    .then(res => {
                        const newResults = res.results.map((u) => ({ ...u, uid: newUid() } as IUniqueUser));
                        // const newData = page === 1 ? newResults : data.concat(newResults);
                        const newData = page === 1 ? newResults : [...data, ...newResults];
                        this.setState({
                            data: newData,
                            filteredData: newData,
                            filter: "",
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
        return new Promise<IUserListResult>(
            (resolved, rejected) => {
                setTimeout(
                    () => {
                        console.debug(`Fetched users for page ${page}`);
                        fetch(serviceUrl)
                            .then(res => res.json()) // this gives me all the data as type `any` which does not give me any type safety, nor intellisense.
                            .then(res => res as IUserListResult)  // assigns an interface to the respose so now there is a type
                            .then(resolved, rejected);
                    },
                    1500
                )
            }
        );
    }
}


export { AppShell };
