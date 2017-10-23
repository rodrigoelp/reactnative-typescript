import * as React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { User } from "../models/models";
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
        const numberOfPlayers = this.props.players.length;
        return (
            <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
                <Text>
                    I got {numberOfPlayers} players registered!
                </Text>
            </View>
        );
    }
}

export interface UserBoardProps { // changing React.Component<any> to React.Component<UserBoardProps> has nasty consequences at the moment.
    players: Array<User>;
}

// mapping the store state created when we combined all the reducers into the properties we want to use in the view.
function mapStateToProps(state:StoreState) {
    return {
        players: state.users,
    } as UserBoardProps;
};

// exporting the connected container. This export will give you back a component that has been registered and connected with redux.
export default connect(mapStateToProps)(UserBoard);
