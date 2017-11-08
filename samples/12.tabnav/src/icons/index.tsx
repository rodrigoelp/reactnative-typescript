import * as React from "react";
import { } from "react-native";
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

const setsWithIcons = [
    { nameOfSet: IconSetGroup.AwesomeFonts, icon: (name: string, color: string) => (<FontAwesomeIcon name={name} size={36} color={color} />), names: awesomeFontsNames },
    { nameOfSet: IconSetGroup.Evil, icon: (name: string, color: string) => (<EvilIcon name={name} size={36} color={color} />), names: evilNames },
    { nameOfSet: IconSetGroup.Feather, icon: (name: string, color: string) => (<FeatherIcon name={name} size={36} color={color} />), names: featherNames },
    { nameOfSet: IconSetGroup.Foundation, icon: (name: string, color: string) => (<FoundationIcon name={name} size={36} color={color} />), names: foundationNames },
    { nameOfSet: IconSetGroup.IonIcons, icon: (name: string, color: string) => (<IonIcon name={name} size={36} color={color} />), names: ionIconsNames },
    { nameOfSet: IconSetGroup.Material, icon: (name: string, color: string) => (<MaterialIcon name={name} size={36} color={color} />), names: materialNames },
    { nameOfSet: IconSetGroup.MaterialCommuninity, icon: (name: string, color: string) => (<MaterialCommunityIcon name={name} size={36} color={color} />), names: materialCommunityNames },
    { nameOfSet: IconSetGroup.OctIcons, icon: (name: string, color: string) => (<OctIcon name={name} size={36} color={color} />), names: octIconsNames },
    { nameOfSet: IconSetGroup.SimpleLine, icon: (name: string, color: string) => (<SimpleLineIcon name={name} size={36} color={color} />), names: simpleLineNames },
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
    setsWithIcons
};
