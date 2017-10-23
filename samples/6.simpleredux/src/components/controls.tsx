import * as React from "react";
import { TouchableOpacity, Text } from "react-native";

export interface ButtonProps {
    title: string;
    onPress: () => void;
}

export class Button extends React.Component<ButtonProps> {
    public render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <Text>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}