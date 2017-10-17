
import * as React from "react";
import { View, ViewStyle, Text, TouchableHighlight } from "react-native";
import { appStyles } from "./styles";

export interface IButtonProps {
    text: string;
    onPress: () => void;
    style?: ViewStyle;
}

export class Button extends React.Component<IButtonProps>{
    public render() {
        const buttonStyle = this.props.style !== undefined ? this.props.style : appStyles.defaultContainer;
        return (
            <View style={buttonStyle}>
                <TouchableHighlight style={appStyles.buttonTouchableContent} onPress={this.props.onPress}>
                    <Text style={appStyles.largeButtonText}>
                        {this.props.text}
                    </Text>
                </TouchableHighlight>
            </View>);
    }
}
