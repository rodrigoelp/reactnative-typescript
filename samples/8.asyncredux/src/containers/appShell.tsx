
import * as React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchPostsActionCreator, fetchUsersActionCreator } from "../actions";
import appStyles from "../appStyles";
import { PostListView } from "../components/postListView";
import { ActivityStatus, IAppState, IPost, IUser } from "../models";

interface IAppShellProps {
    actionStatus: ActivityStatus;
    posts: IPost[];
    users: IUser[];
}

interface IAppShellActions {
    fetchPosts: () => void;
    fetchUsers: () => any;
}

type AppShellProps = IAppShellProps & IAppShellActions;

class AppShell extends React.Component<AppShellProps> {
    constructor(props: AppShellProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchPosts();
    }

    public render() {
        return (
            <View style={appStyles.containerApp}>
                <View style={appStyles.containerHeader}>
                    <Text style={appStyles.textInfo}>
                        Displaying {this.props.posts.length} posts.
                    </Text>
                </View>
                <View style={appStyles.containerBody}>
                    <PostListView posts={this.props.posts} users={this.props.users} />
                </View>
                {this.renderFooter()}
            </View>
        );
    }

    private renderFooter = () => {
        if (this.props.actionStatus === ActivityStatus.NoActivity
            || this.props.actionStatus === ActivityStatus.Loaded) {
            return <View />;
        }

        let message = "";
        let style = appStyles.containerFooter;
        if (this.props.actionStatus === ActivityStatus.Loading) {
            message = "Loading posts...";
        } else {
            message = "I'm sorry! I couldn't download the list of posts.";
            style = appStyles.containerFooterError;
        }

        return (
            <View style={style}>
                <Text style={appStyles.textFooter}>{message}</Text>
            </View>
        );
    }
}

function mapStateToProps(state: IAppState): IAppShellProps {
    return {
        actionStatus: state.activityStatus,
        posts: state.posts,
        users: state.users,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>): IAppShellActions {
    return {
        fetchPosts: fetchPostsActionCreator(dispatch),
        fetchUsers: fetchUsersActionCreator(dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);
