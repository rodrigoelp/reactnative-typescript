import * as React from "react";
import { TextStyle } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import FoundationIcon from "react-native-vector-icons/Foundation";
import IonIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import SimpleLineIcon from "react-native-vector-icons/SimpleLineIcons";
import OctIcon from "react-native-vector-icons/Octicons";
// import ZocialIcon from "react-native-vector-icons/Zocial";

import { awesomeFontsNames } from "./awesomeFont";
import { entypoNames } from "./entypo";
import { evilNames } from "./evil";
import { featherNames } from "./feather";
import { foundationNames } from "./foundation";
import { ionIconsNames } from "./ionIcons";
import { materialNames } from "./material";
import { materialCommunityNames } from "./materialCommunity";
import { octIconsNames } from "./octIcons";
import { simpleLineNames } from "./simpleLine";
import { zotialNames } from "./zotial";

enum IconSetGroup {
    AwesomeFonts = "AwesomeFonts",
    Entypo = "Entypo",
    Evil = "Evil",
    Feather = "Feather",
    Foundation = "Foundation",
    IonIcons = "IonIcons",
    Material = "Material",
    MaterialCommuninity = "MaterialCommunity",
    OctIcons = "OctIcons",
    SimpleLine = "SimpleLine",
    Zotial = "Zotial",
}

const allIconSetGroups = [
    IconSetGroup.AwesomeFonts,
    IconSetGroup.Evil,
    IconSetGroup.Feather,
    IconSetGroup.Foundation,
    IconSetGroup.IonIcons,
    IconSetGroup.Material,
    IconSetGroup.MaterialCommuninity,
    IconSetGroup.OctIcons,
    IconSetGroup.SimpleLine,
    IconSetGroup.Zotial,
];

type iconElementCreator = (name: string, size: number, color: string, style: TextStyle) => JSX.Element;

const setsWithIcons = [
    {
        nameOfSet: IconSetGroup.AwesomeFonts, icon:
            (name: string, size: number, color: string, style: TextStyle) => (
                <FontAwesomeIcon name={name} size={size} color={color} style={style} />
            ),
        names: awesomeFontsNames
    },
    {
        nameOfSet: IconSetGroup.Evil,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <EvilIcon name={name} size={size} color={color} style={style} />
        ),
        names: evilNames
    },
    {
        nameOfSet: IconSetGroup.Feather,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <FeatherIcon name={name} size={size} color={color} style={style} />
        ),
        names: featherNames
    },
    {
        nameOfSet: IconSetGroup.Foundation,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <FoundationIcon name={name} size={size} color={color} style={style} />
        ),
        names: foundationNames
    },
    {
        nameOfSet: IconSetGroup.IonIcons,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <IonIcon name={name} size={size} color={color} style={style} />
        ),
        names: ionIconsNames
    },
    {
        nameOfSet: IconSetGroup.Material,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <MaterialIcon name={name} size={size} color={color} style={style} />
        ),
        names: materialNames
    },
    {
        nameOfSet: IconSetGroup.MaterialCommuninity,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <MaterialCommunityIcon name={name} size={size} color={color} style={style} />
        ),
        names: materialCommunityNames
    },
    {
        nameOfSet: IconSetGroup.OctIcons,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <OctIcon name={name} size={size} color={color} style={style} />
        ),
        names: octIconsNames
    },
    {
        nameOfSet: IconSetGroup.SimpleLine,
        icon: (name: string, size: number, color: string, style: TextStyle) => (
            <SimpleLineIcon name={name} size={size} color={color} style={style} />
        ),
        names: simpleLineNames
    },
    // [IconSetGroup.Zotial]: { icon: ZotialIcon, names: zotialNames },
];

export {
    awesomeFontsNames,
    evilNames,
    featherNames,
    foundationNames,
    ionIconsNames,
    materialNames,
    materialCommunityNames,
    octIconsNames,
    simpleLineNames,
    zotialNames,
    IconSetGroup,
    allIconSetGroups,
    setsWithIcons,
    iconElementCreator
};
