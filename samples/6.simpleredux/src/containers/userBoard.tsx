import * as React from "react";
import { connect } from "react-redux";
import { FlatList, View, Text, ListRenderItemInfo, } from "react-native";
import { User, GameScore, Game, Gender } from "../models/models";
import { UniqueId } from "../models/sysTypes";
import { StoreState } from "../stores/store";

/**
 * This container needs to take this special property
 * that will be injected by redux.
 * It should be a mixture of the properties mapped below, some of the actions
 * and react-redux internals. No idea what type should be provided yet, so
 * providing 'any' to get it to work.
 * 
 * NOTE: unlike components, this object is not exported in here. It will be 
 * exported further down with the 'connect' method.
 */
class UserBoard extends React.Component<any, object> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const players: Array<User> = this.props.players;
        return (
            <View style={{ flex: 1, alignContent: "stretch" }}>
                <Text style={{ flexBasis: "auto", marginTop: 48, marginLeft: 24, marginRight: 24, textAlign: "center", fontSize: 24 }}>
                    Displaying a total of {players.length}
                </Text>
                <FlatList
                    style={{ flexGrow: 1 }}
                    data={players}
                    keyExtractor={this.getKeyForPlayer}
                    renderItem={this.renderPlayer}
                />
            </View>
        );
    }

    // it just returns the user id as a key for react.
    getKeyForPlayer = (item: User): string => {
        return item.id.toString();
    }

    // It renders the player information. Optionally, this could be pulled as its own separate component.
    renderPlayer = ({ item }: ListRenderItemInfo<User>) => {
        return (
            <View style={{ flex: 1, margin: 10, padding: 10, alignContent: "stretch" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
                    <Text style={{ fontSize: 8}}>{item.userName} </Text>
                </View>
                <View style={{ flex: 1, flexWrap: "wrap", marginTop: 8 }}>
                    <Text>
                        {item.gender == Gender.Male ? "His" :
                            item.gender == Gender.Female ? "Her" : "Its" } games:
                    </Text>
                    { item.ownGames.map(this.renderScore)}
                </View>
            </View>
        );
    }

    // It renders the score achieved on each game.
    renderScore = ({ game, highestScore }: GameScore) => {
        const key = UniqueId.newId().toString();
        return (
            <View key={key} style={{ flex: 1, justifyContent: "flex-end", marginTop: 8 }}>
                <Text style={{ fontWeight: "bold", textAlign: "right" }}>{Game[game]}: </Text>
                <Text style={{ textAlign: "right" }}>{highestScore}</Text>
            </View>
        );
    }
}

export interface UserBoardProps { // changing React.Component<any> to React.Component<UserBoardProps> has nasty consequences at the moment.
    players: Array<User>;
}

// mapping the store state created when we combined all the reducers into the properties we want to use in the view.
function mapStateToProps(state: StoreState) {
    return {
        players: state.users,
    } as UserBoardProps;
};

// exporting the connected container. This export will give you back a component that has been registered and connected with redux.
export default connect(mapStateToProps)(UserBoard);
