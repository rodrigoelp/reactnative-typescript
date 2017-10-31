import * as React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import appStyles from "../appStyles";
import { isNullOrUndefined } from "../globalfunctions";
import { IPost, IUser } from "../models";
import { PostCellItemView } from "./postCellItemView";

interface IProps {
    posts: IPost[];
    users: IUser[];
}

class PostListView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <View style={appStyles.container}>
                <FlatList
                    data={this.props.posts}
                    renderItem={this.renderPost}
                    keyExtractor={this.getKeyForItem}
                />
            </View>
        );
    }

    private getKeyForItem = (post: IPost) => post.id.toString();
    private getUserOfPost = (post: IPost) => {
        const user = this.props.users.find((usr) => usr.id === post.userId);
        return user;
    }

    private renderPost = (itemInfo: ListRenderItemInfo<IPost>) => (
        <PostCellItemView
            post={itemInfo.item}
            user={this.getUserOfPost(itemInfo.item)} />
    )
}

export { PostListView };
