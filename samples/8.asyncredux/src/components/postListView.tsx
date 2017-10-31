import * as React from "react";
import { FlatList, ListRenderItemInfo, Text, View } from "react-native";
import appStyles from "../appStyles";
import { IPost } from "../models";
import { PostCellItemView } from "./postCellItemView";

interface IProps {
    posts: IPost[];
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
    private renderPost = (itemInfo: ListRenderItemInfo<IPost>) => <PostCellItemView post={itemInfo.item} />;
}

export { PostListView };
