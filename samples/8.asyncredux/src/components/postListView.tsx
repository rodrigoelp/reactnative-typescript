import * as React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import appStyles from "../appStyles";
import { IPost, IUser } from "../models";
import { PostCellItemView } from "./postCellItemView";

interface IProps {
    posts: IPost[];
    users: IUser[];
}

interface IPostWithUser {
    post: IPost;
    user: IUser | undefined;
}

class PostListView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        const postsAndUsers =
            this.props.posts
                .map((p, i) => {
                    const author = this.props.users.find((u) => u.id === p.userId);
                    return { post: p, user: author } as IPostWithUser;
                });
        return (
            <View style={appStyles.container}>
                <FlatList
                    data={postsAndUsers}
                    renderItem={this.renderPost}
                    keyExtractor={this.getKeyForItem}
                />
            </View>
        );
    }

    private getKeyForItem = (p: IPostWithUser) => p.post.id.toString();
    private renderPost = (itemInfo: ListRenderItemInfo<IPostWithUser>) => {
        const { item } = itemInfo;
        return <PostCellItemView post={item.post} user={item.user} />;
    }
}

export { PostListView };
