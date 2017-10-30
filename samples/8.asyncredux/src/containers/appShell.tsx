
import * as React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { fetchUsersActionCreator } from "../actions";
import { ActivityStatus, IAppState, IPost } from "../models";

interface IAppShellProps {
    isLoadingVisible: boolean;
    posts: IPost[];
}

interface IAppShellActions {
    fetchPosts: () => void;
}

type AppShellProps = IAppShellProps & IAppShellActions;

class AppShell extends React.Component<AppShellProps> {
    constructor(props: AppShellProps) {
        super(props);
    }

    public componentDidMount() {
        this.props.fetchPosts();
    }

    public render() {
        const loadingText = this.props.isLoadingVisible ?
            "Please wait. Loading..." :
            "";
        return (
            <View style={{ flex: 1, paddingBottom: 30, paddingTop: 40 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text>
                        Hi Muji {this.props.posts.length}
                    </Text>
                </View>
                <View style={{ flexBasis: "auto", minHeight: 40 }} >
                    <Text>{loadingText}</Text>
                </View>
            </View>
        );
    }
}

function mapStateToProps(state: IAppState): IAppShellProps {
    return {
        isLoadingVisible: convertStatusToVisibility(),
        posts: state.posts,
    };

    function convertStatusToVisibility(): boolean {
        return state.activityStatus === ActivityStatus.Loading;
    }
}

function mapDispatchToProps(dispatch: Dispatch<any>): IAppShellActions {
    return {
        fetchPosts: fetchUsersActionCreator,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppShell);
