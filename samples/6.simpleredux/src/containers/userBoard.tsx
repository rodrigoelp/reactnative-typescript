import * as React from "react";
import { connect } from "react-redux";
import { FlatList, View, Text, ListRenderItemInfo } from "react-native";
import { selectUserActionCreator, ActionInfo } from "../reducers/actions";
import { Button } from "../components/controls";
import { User, GameScore, Game, Gender } from "../models/models";
import { UniqueId } from "../models/sysTypes";
import { StoreState } from "../stores/store";
import { appStyles } from "../styles";
import { bindActionCreators, Dispatch } from "redux";

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
            <View style={appStyles.appContainer}>
                <Text style={appStyles.sectionHeader}>
                    Displaying a total of {players.length}
                </Text>
                <FlatList
                    style={appStyles.genericContainer}
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
        const adjective = item.gender == Gender.Male ? "His" :
            item.gender == Gender.Female ? "Her" : "Its";
        return (
            <View style={{ flex: 1, margin: 10, padding: 10, alignContent: "stretch" }}>
                <View style={{ flex: 1 }}>
                    <Text style={appStyles.header1}>{item.name}</Text>
                    <Text style={appStyles.infoText}>{item.userName} </Text>
                </View>
                <View style={appStyles.wrappingContainer}>
                    <Text>
                        {adjective} games:
                    </Text>
                    { item.ownGames.map(this.renderScore)}
                </View>
                <Button title="View" onPress={() => this.props.selectUser(item)} />
            </View>
        );
    }

    // It renders the score achieved on each game.
    renderScore = ({ game, highestScore }: GameScore) => {
        const key = UniqueId.newId().toString();
        return (
            <View key={key} style={appStyles.scoreContainer}>
                <Text style={appStyles.scoreTitle}>{Game[game]}: </Text>
                <Text style={appStyles.score}>{highestScore}</Text>
            </View>
        );
    }
}

export interface UserBoardProps { // changing React.Component<any> to React.Component<UserBoardProps> has nasty consequences at the moment.
    players: Array<User>;
    selectUser: (user: User) => ActionInfo<User>;
}

// mapping the store state created when we combined all the reducers into the properties we want to use in the view.
function mapStateToProps(state: StoreState) {
    return {
        players: state.users,
    } as UserBoardProps;
};

// providing the user selection function to the container.
function mapDispatchToProps(dispatch: Dispatch<any>) {
    return bindActionCreators({ selectUser: selectUserActionCreator }, dispatch)
}

// exporting the connected container. This export will give you back a component that has been registered and connected with redux.
export default connect(mapStateToProps, mapDispatchToProps)(UserBoard);
