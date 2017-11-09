import * as React from "react";
import { View, Text, SectionList, ListRenderItemInfo, SectionListData, Dimensions, StyleSheet } from "react-native";
import * as uuid from "uuid";
import { setsWithIcons, iconElementCreator, IconSetGroup } from "./icons";
import { sectionStyles, Colours } from "./styles";

interface ISection {
    title: IconSetGroup,
    data: ISectionItem[], // the idea with this one is to create groups of (upto) 50 icons per row
}

interface ISectionItem {
    subItems: ISectionSubItem[],
}

interface ISectionSubItem {
    iconCreator: iconElementCreator,
    name: string
}

const numberOfColumns = 4;
const numberOfItemsPerCell = 24 * numberOfColumns;
const { height, width } = Dimensions.get("window");
const cellItemSize = Math.floor((width - 40) / numberOfColumns);

class IconList extends React.PureComponent {
    public render() {
        return (
            <View>
                <SectionList
                    sections={this.iconSetsToSections()}
                    renderSectionHeader={({ section }) => this.renderSectionHeader(section.title)}
                    renderItem={this.renderItem}
                    keyExtractor={this.getKeyForItem}
                />
            </View>
        );
    }
    private renderSectionHeader(title: string) {
        const sectionHeaderKey = `header_${title}`
        return (
            <View key={sectionHeaderKey} style={sectionStyles.headerContainer}>
                <Text style={sectionStyles.headerTitle}>{title}</Text>
            </View>
        );
    }

    private renderItem({ item }: ListRenderItemInfo<ISectionItem>) {
        const subitems = item.subItems.map(
            (i) => {
                const { name, iconCreator } = i;
                const key = uuid.v1();
                return (
                    <View key={key} style={[subStyles.iconContainer, { height: cellItemSize + 20, width: cellItemSize }]}>
                        {iconCreator(name, cellItemSize - 24, Colours.First, subStyles.centeredIcon)}
                        <Text style={subStyles.iconTitle}>{name}</Text>
                    </View>
                );
            });
        return (
            <View style={subStyles.wrappingCellContainer}>
                {subitems}
            </View>
        );
    }

    private iconSetsToSections(): ISection[] {
        return setsWithIcons.map(
            item => {
                const { nameOfSet, icon, names } = item;
                const iconsAndNames = names.map<ISectionSubItem>(n => ({ iconCreator: icon, name: n }));
                return { title: nameOfSet, data: this.chunkIt(iconsAndNames, numberOfItemsPerCell) };
            }
        );
    }

    private chunkIt(allItems: ISectionSubItem[], maxItemsPerChunk: number): ISectionItem[] {
        if (maxItemsPerChunk <= 0) {
            throw "Can't do chunks like this mate...";
        }
        let items = new Array<ISectionItem>();
        const numberOfItems = Math.ceil(allItems.length / maxItemsPerChunk);
        for (let itemIndex = 0; itemIndex < numberOfItems; itemIndex++) {
            const start = itemIndex * maxItemsPerChunk;
            const end = (itemIndex + 1) * maxItemsPerChunk;
            items.push({ subItems: allItems.slice(start, end) });
        }
        return items;
    }

    private getKeyForItem(item: ISectionItem, index: number) {
        return index.toString();
    }

}

const subStyles = StyleSheet.create({
    wrappingCellContainer: {
        flex: 1,
        flexWrap: "wrap",
        justifyContent: "center",
        flexDirection: "row"
    },
    centeredIcon: {
        textAlign: "center", justifyContent: "center"
    },
    iconTitle: {
        textAlign: "center",
        minHeight: 20,
    },
    iconContainer: {
        justifyContent: "center", alignContent: "center"
    },
    sectionTitle: {
        fontSize: 40,
    }
});

export { IconList };
