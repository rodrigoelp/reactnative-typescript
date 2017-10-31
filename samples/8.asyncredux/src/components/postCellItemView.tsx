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
            return this.renderWithoutUser(this.props.post);
        }
        return this.renderPostWithUser(this.props.post, this.props.user!);
    }

    private renderWithoutUser(post: IPost) {
        return (
            <View style={appStyles.containerPostItemSimple}>
                <Text style={appStyles.textPostTitle}>{post.title}</Text>
                <Text style={appStyles.textPostPreviewBody}>
                    {this.shortenTextIfExceeds(post.body, 100)}
                </Text>
            </View>
        );
    }

    private renderPostWithUser(post: IPost, user: IUser) {
        return (
            <View style={appStyles.containerPostItemWithUser}>
                <View style={appStyles.containerPostItemUserArea}>
                    <Image source={{}} />
                    <Text style={appStyles.textInfo}>
                        Posted by:
                        {user.name}
                        ({user.username})
                    </Text>
                </View>
                <View style={appStyles.containerPostItemPostArea}>
                    <Text style={appStyles.textPostTitle}>{post.title}</Text>
                    <Text style={appStyles.textPostPreviewBody}>
                        {this.shortenTextIfExceeds(post.body, 100)}
                    </Text>
                </View>
            </View>
        );
    }

    private shortenTextIfExceeds = (text: string, maxNumberOfCharacters: number) => {
        if (isNullOrUndefined(text) || text.length === 0) {
            return "";
        }
        return text.length > maxNumberOfCharacters ? text.slice(0, maxNumberOfCharacters - 3) + "..." : text;
    }
}

export { PostCellItemView };
