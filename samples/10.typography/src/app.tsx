import * as React from 'react';
import { AppRegistry, SectionList, View, Text, Platform, SectionListData } from 'react-native';
import styles from "./styles";
import { androidFonts, iOsFonts, fontWeights, FontWeight } from "./models";

const fontsToUse = Platform.select({
    ios: iOsFonts,
    android: androidFonts,
});

interface ISectionItem {
    fontFamily: string;
    fontWeight: FontWeight;
}

interface ISection {
    title: string;
    data: ISectionItem[];
}

class App extends React.Component {
    private fonts: ISection[];
    constructor() {
        super();
        this.fonts = fontsToUse.map<ISection>((v) => ({
            title: v,
            data: fontWeights.map<ISectionItem>((w) => ({ fontFamily: v, fontWeight: w }))
        }));
    }

    public render() {
        return (
            <View style={styles.appContainer}>
                <SectionList
                    sections={this.fonts}
                    renderItem={({ item }) => this.renderItem(item)}
                    renderSectionHeader={({ section }) => this.renderHeader(section.title)}
                    keyExtractor={this.getKeyForItem}
                    stickySectionHeadersEnabled={true}
                />
            </View>
        );
    }

    private renderHeader = (title: string | undefined) => {
        const header = (title === undefined) ? " --- " : title;
        return (
            <View style={{backgroundColor: "silver" }}>
                <Text style={styles.title}>{header}</Text>
            </View>
        );
    }

    private getKeyForItem = (item: ISectionItem, index: number) => {
        return `${item.fontFamily}-${item.fontWeight}-${index}`;
    }

    private renderItem = (item: ISectionItem) => {
        return (
            <View style={styles.container}>
                <Text style={styles.info}>
                    Weight: {item.fontWeight}
                </Text>
                <Text style={[styles.item, { fontFamily: item.fontFamily, fontWeight: item.fontWeight }]}>
                    The fox jumps over the lazy dog
                </Text>
            </View>
        );
    };
}

AppRegistry.registerComponent('typography', () => App);