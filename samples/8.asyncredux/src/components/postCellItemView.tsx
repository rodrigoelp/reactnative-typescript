import * as React from "react";
import { Image, ImageURISource, Text, View } from "react-native";
import appStyles from "../appStyles";
import { isNullOrUndefined } from "../globalfunctions";
import { IPhoto, IPost, IUser} from "../models";
import { PhotoLocator } from "../services";

interface IProps {
    post: IPost;
    user: IUser | undefined;
}

interface IState {
    photoUrl: string;
}

class PostCellItemView extends React.Component<IProps, IState> {
    private photoLocator: PhotoLocator;

    constructor(props: IProps) {
        super(props);
        this.photoLocator = new PhotoLocator();
        this.state = { photoUrl: this.photoLocator.getUnknownPhoto().thumbnailUrl };
    }

    public componentDidMount() {
        if (!isNullOrUndefined(this.props.user)) {
            const user = this.props.user!;
            this.photoLocator.getUserPhoto(user.id)
                .then((photo) => {
                    this.setState({ photoUrl: photo.thumbnailUrl });
                });
        }
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
        const sourceUri = this.state.photoUrl;
        return (
            <View style={appStyles.containerPostAndUserItemWithUser}>
                <View style={appStyles.containerPostAndUserUserArea}>
                    <Image source={{ uri: sourceUri}} style={{ backgroundColor: "gray", width: 60, height: 60}} />
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
