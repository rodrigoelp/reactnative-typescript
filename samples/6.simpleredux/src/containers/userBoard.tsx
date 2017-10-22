import * as React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";


export class UserBoard extends React.Component<object, object> {
    public render() {
        return (
            <View style={{flex: 1, alignItems:"center", justifyContent:"center"}}>
                <Text>
                    Some sample code to begin with...
                </Text>
            </View>
        );
    }
}
