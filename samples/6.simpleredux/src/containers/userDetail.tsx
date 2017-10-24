import * as React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { appStyles } from "../styles";
import { StoreState } from "../stores/store";

class UserDetail extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    
    public render() {
        console.log(`Checking if I need to display the current user information... ${this.props.currentUser !== null}`)
        if (this.props.currentUser === null) {
            return (
                <View style={{ backgroundColor:"pink", flex:0}} />
            );
        }
        return (
            <View style={appStyles.appContainer}>
                <Text>{this.props.currentUser.name}</Text>
                <Text>{this.props.currentUser.userName}</Text>
                <Text>{this.props.currentUser.gender}</Text>
            </View>
        );
    }
}

function mapStateToProps(state: StoreState) {
    return {
        currentUser: state.activeUser.id === 0 ? null : state.activeUser,
    };
}

export default connect(mapStateToProps)(UserDetail);
