import * as React from "react";
import { Image, FlatList, View, Text, SectionList, ListRenderItem, ListRenderItemInfo } from "react-native";
import { styles } from "./styles";
import { setsWithIcons, IconSetGroup, allIconSetGroups } from "./icons";
import { Icon } from "react-native-vector-icons/Icon";

class IconSetList extends React.Component {
    constructor() {
        super();
    }

    public render() {
        const sections = setsWithIcons.map(
            item => {
                const { nameOfSet, icon, names } = item;
                const iconsAndNames = names.map(n => ({ iconComponent: icon, name: n}));
                return ({ title: nameOfSet, data: iconsAndNames });
            }
        );

        return (
            <SectionList
                sections={sections}
                renderItem={this.renderItem}
            />
        );
    }

    private renderItem(item: ListRenderItemInfo<{iconComponent: Icon, name: string}>) {
        const imageSource = Icon.getImageSource(name, 24, "#000");
        return (
            <View>
                {/* <Image source={{}} /> */}
                <Text>{name}</Text>
            </View>
        );
    }
}

export default IconSetList;