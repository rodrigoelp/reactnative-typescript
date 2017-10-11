
import * as React from "react";
import { StyleSheet, Text, TouchableHighlight } from "react-native";
import * as Resources from "./Resources";

interface IButtonProps {
    text: string;
    onPress: () => void;
}

export default class Button extends React.Component<IButtonProps, object> {
    constructor(props: IButtonProps) {
        super(props);
    }

    public render() {
        return (
            <TouchableHighlight style={Resources.appStyles.button} onPress={this.props.onPress}>
                <Text style={Resources.appStyles.normalText}>
                    {this.props.text}
                </Text>
            </TouchableHighlight>
        );
    }
}
