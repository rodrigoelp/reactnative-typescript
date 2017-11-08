import * as React from "react";
import { View, Text, SectionList, ListRenderItemInfo, SectionListData } from "react-native";
import { setsWithIcons, IconSetGroup } from "./icons";

interface ISectionItem {
    iconFunc: (name: string, color: string) => JSX.Element,
    name: string
}

class IconList extends React.PureComponent {
    public render() {
        const sections = setsWithIcons.map(
            item => {
                const { nameOfSet, icon, names } = item;
                const iconsAndNames = names.map(n => ({ iconFunc: icon, name: n }));
                return { title: nameOfSet, data: iconsAndNames };
            }
        );

        return (
            <View>
                <SectionList
                    sections={sections}
                    renderSectionHeader={({section}) => this.renderSectionHeader(section.title)}
                    renderItem={this.renderItem}
                    keyExtractor={this.getKeyForItem}
                />
            </View>
        );
    }

    private renderSectionHeader(title: string) {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{title}</Text>
            </View>
        );
    }

    private getKeyForItem(item: any, index: number) {
        return index.toString();
    }

    private renderItem(item: ListRenderItemInfo<ISectionItem>) {
        const { name, iconFunc } = item.item;
        const icon = iconFunc(name, "#000");
        return (
            <View style={{height: 60, width:60, backgroundColor: "pink"}}>
                {icon}
                <Text>
                    {item.item.name}
                </Text>
            </View>
        );
    }
}

export { IconList };
