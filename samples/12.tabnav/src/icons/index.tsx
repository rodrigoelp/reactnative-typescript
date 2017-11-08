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
    { nameOfSet: IconSetGroup.AwesomeFonts, icon: FontAwesomeIcon, names: awesomeFontsNames },
    { nameOfSet:IconSetGroup.Evil,  icon: EvilIcon, names: evilNames },
    { nameOfSet: IconSetGroup.Feather, icon: FeatherIcon, names: featherNames },
    { nameOfSet: IconSetGroup.Foundation, icon: FoundationIcon, names: foundationNames },
    { nameOfSet: IconSetGroup.IonIcons, icon: IonIcon, names: ionIconsNames },
    { nameOfSet: IconSetGroup.Material, icon: MaterialIcon, names: materialNames },
    { nameOfSet: IconSetGroup.MaterialCommuninity, icon: MaterialCommunityIcon, names: materialCommunityNames },
    { nameOfSet: IconSetGroup.OctIcons, icon: OctIcon, names: octIconsNames },
    { nameOfSet: IconSetGroup.SimpleLine, icon: SimpleLineIcon, names: simpleLineNames },
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
