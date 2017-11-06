import * as React from "react";
import { View, FlatList, Text, AppRegistry } from "react-native";
import { fetchSystemFonts } from "./fontLookup";
import { styles } from "./styles";

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

    componentDidMount() {
        fetchSystemFonts()
            .then((fonts) => {
                this.setState({ fonts });
            })
            .catch((error) => this.setState({ fonts: [], error }));
    }

    public render() {
        return (
            <View style={styles.container}>
                <Text>Displaying list of available fonts: {this.state.fonts.length}</Text>
                <FlatList
                    data={this.state.fonts}
                    renderItem={({ item }) => <Text style={[styles.item, { fontFamily: item }]}>{item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent("typography", () => App);
