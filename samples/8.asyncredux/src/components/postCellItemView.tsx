import * as React from "react";
import { Image, Text, View } from "react-native";
import appStyles from "../appStyles";
import { isNullOrUndefined } from "../globalfunctions";
import { IPost, IUser } from "../models";

interface IProps {
    post: IPost;
    user: IUser | undefined;
}

class PostCellItemView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        if (isNullOrUndefined(this.props.user)) {
            return this.renderPost(this.props.post);
        }
        return this.renderPostAndUser(this.props.post, this.props.user!);
    }

    private shortenTextIfExceeds = (text: string, maxNumberOfCharacters: number) => {
        if (text === null || text === undefined || text.length === 0) {
            return "";
        }
        return text.length > maxNumberOfCharacters ? text.slice(0, maxNumberOfCharacters - 3) + "..." : text;
    }

    private renderPost(post: IPost) {
        return (
            <View style={appStyles.containerPostItemSimple}>
                <Text style={appStyles.textPostTitle}>{post.title}</Text>
                <Text style={appStyles.textPostPreviewBody}>
                    {this.shortenTextIfExceeds(post.body, 100)}
                </Text>
            </View>);
    }

    private renderPostAndUser(post: IPost, user: IUser) {
        return (
            <View style={appStyles.containerPostAndUserItemWithUser}>
                <View style={appStyles.containerPostAndUserUserArea}>
                    <Image source={{}} style={{ backgroundColor: "gray", width: 60, height: 60}} />
                    <Text style={appStyles.textInfo}>
                        Author:
                    </Text>
                    <Text style={appStyles.textInfo}>
                        {user.name}
                    </Text>
                </View>
                <View style={appStyles.containerPostAndUserPostArea}>
                    <Text style={appStyles.textPostTitle}>{post.title}</Text>
                    <Text style={appStyles.textPostPreviewBody}>
                        {this.shortenTextIfExceeds(post.body, 100)}
                    </Text>
                </View>

            </View>
        );
    }
}

export { PostCellItemView };
