import * as React from "react";
import { Text, View } from "react-native";
import appStyles from "../appStyles";
import { isNullOrUndefined } from "../globalfunctions";
import { IPost } from "../models";

interface IProps {
    post: IPost;
}

class PostCellItemView extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <View style={appStyles.containerPostItem}>
                <Text style={appStyles.textPostTitle}>{this.props.post.title}</Text>
                <Text style={appStyles.textPostPreviewBody}>
                    {this.shortenTextIfExceeds(this.props.post.body, 100)}
                </Text>
            </View>
        );
    }

    private shortenTextIfExceeds = (text: string, maxNumberOfCharacters: number) => {
        if (text === null || text === undefined || text.length === 0) {
            return "";
        }
        return text.length > maxNumberOfCharacters ? text.slice(0, maxNumberOfCharacters - 3) + "..." : text;
    }
}

export { PostCellItemView };
