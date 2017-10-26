
import * as React from "react";
import { Image, View, Text, FlatList, ListRenderItemInfo } from "react-native";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";
import { appStyles } from "../styles";
import { Button } from "../components/controls";
import { IStoreState, getImageForGame } from "../stores";
import { ScreenName, User, GameScore, Game, UniqueId } from "../models";
import { SwitchToScreenActionCreator, ITypedAction } from "../reducers";

interface IGamerDetailsProps {
    user: User;
    switchScreen: (screen: ScreenName) => ITypedAction<ScreenName>;
}

class GamerDetails extends React.Component<any, any> {
    private _props: IGamerDetailsProps;

    constructor(props: any) {
        super(props);
        this._props = props as IGamerDetailsProps;
    }

    public render() {
        const { user } = this._props;
        const orderedGames = user.ownGames.sort((a: GameScore, b: GameScore): number => {
            if (a.highestScore > b.highestScore) return -1;
            else if (a.highestScore < b.highestScore) return 1;
            return 0;
        });
        return (
            <View style={appStyles.appContainer}>
                <Text style={appStyles.sectionHeader}>{user.name}</Text>
                <Button title="Go Back" onPress={this.goBackHome} />
                <FlatList
                    data={orderedGames}
                    renderItem={this.renderGameInfo}
                    keyExtractor={this.getKeyForItem}
                />
            </View>
        );
    }

    getKeyForItem = (item: GameScore, index: number) => {
        return item.game.toString();
    };

    renderGameInfo = ({ item }: ListRenderItemInfo<GameScore>) => {
        return (
            <View style={{
                flex: 1, justifyContent: "space-between", alignContent: "stretch",
                padding: 16, marginTop: 8, marginBottom: 8, flexDirection: "row"
            }}>
                <View style={appStyles.genericContainer}>
                    <Image style={{ height: 76, width: 76 }} source={{ uri: getImageForGame(item.game) }} />
                    <Text style={appStyles.text}>{Game[item.game]}</Text>
                </View>
                <Text style={appStyles.header1}>{item.highestScore}</Text>
            </View>
        );
    };

    goBackHome = (): void => {
        this._props.switchScreen(ScreenName.Home);
    }
}

function mapStateToProps(state: IStoreState) {
    return {
        user: state.activeUser,
    };
}

function mapDispatchToProps(dispatch: Dispatch<any>) {
    return bindActionCreators({
        switchScreen: SwitchToScreenActionCreator,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GamerDetails);
