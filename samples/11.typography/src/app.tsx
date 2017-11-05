import * as React from "react";
import { View, StyleSheet, FlatList, Text, AppRegistry } from "react-native";

interface IProps {
}

interface IState {
    fonts: string[];
    error?: string;
}

class App extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        this.state = { fonts: [] };
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>Displaying list of available fonts: {this.state.fonts.length}</Text>
                <FlatList
                    data={this.state.fonts}
                    renderItem={({ item }) => <Text style={{ fontFamily: item }}>{item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
    },
});

AppRegistry.registerComponent("typography", () => App);
