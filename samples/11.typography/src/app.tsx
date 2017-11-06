import * as React from "react";
import { View, FlatList, Text, AppRegistry, SectionList } from "react-native";
import { fetchSystemFonts } from "./fontLookup";
import { ISection, ISectionItem, fontWeights } from "./models";
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
        const appTitle = `Displaying list of available fonts:\n${this.state.fonts.length}`;
        const sections = this.state.fonts.map<ISection>(
            (fontName) => ({
                title: fontName,
                data: fontWeights.map<ISectionItem>(
                    (weight) => ({ fontFamily: fontName, fontWeight: weight }))
            }));
        return (
            <View style={styles.appContainer}>
                <Text style={styles.appTitle}>{appTitle}</Text>
                <SectionList
                    sections={sections}
                    renderItem={({ item, index }) => this.renderItem(item, index)}
                    renderSectionHeader={({ section }) => this.renderHeader(section.title)}
                    keyExtractor={this.getKeyForItem}
                    stickySectionHeadersEnabled={true}
                    pagingEnabled={false} // this is an apple setting, it forces sections to collapse when you start scrolling
                />
            </View>
        );
    }

    private renderHeader = (title: string | undefined) => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        );
    }

    private getKeyForItem = (item: ISectionItem, index: number) => {
        return `${item.fontFamily}-${item.fontWeight}-${index}`;
    }

    private renderItem = (item: ISectionItem, index: number) => {
        return (
            <View style={styles.itemContainer}>
                <Text style={[styles.item, { fontFamily: item.fontFamily, fontWeight: item.fontWeight }]}>
                    The fox jumps over the lazy dog
                </Text>
                <Text style={styles.info}>
                    Weight: {item.fontWeight}
                </Text>
            </View>
        );
    };
}

AppRegistry.registerComponent("typography", () => App);
