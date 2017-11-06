
const fontWeights: FontWeight[] = [
    "900",
    // "800",
    // "700",
    "600",
    // "500",
    // "400",
    "300",
    // "200",
    "100",
    "bold",
    "normal",
];

type FontWeight = 
    "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

interface ISectionItem {
    fontFamily: string;
    fontWeight: FontWeight;
}

interface ISection {
    title: string;
    data: ISectionItem[];
}

export { fontWeights, FontWeight, ISection, ISectionItem };
