import * as React from "react";
import { AppRegistry, View, Dimensions, Image, ScaledSize, Animated, Text, Button, Platform } from "react-native";

interface AssetSize { height: number, width: number }

class Asset {
    private _originalSize: AssetSize;

    public asset: any;
    public size: AssetSize;
    public location: Animated.ValueXY;

    constructor(resource: any, scaleX: number, scaleY: number, imgSize: AssetSize) {
        this.asset = resource;

        this._originalSize = imgSize;
        this.size = { height: imgSize.height * scaleY, width: imgSize.width * scaleX };
        this.location = new Animated.ValueXY({ x: 0, y: 0 });
    }
}

const window = Dimensions.get("window");
const designSize = { width: 1682 , height: 2480 }; // this was the canvas size of the image
const scaleX = window.width / designSize.width;
const scaleY = window.height / designSize.height;
const globalScale = .24;

enum AppColors {
    Space = "#303746",
}

enum AssetPath {
    FullImage = "./assets/fullImage.png",
    Stars = "./assets/stars.png", // 
    Sky = "./assets/sky.png",
    Planets = "./assets/planets.png", // 
    WorldAndRose = "./assets/princeWorld.png",
    Prince = "./assets/travelingPrince.png"
}

const appFontFamily = Platform.select({
    ios: "Zapfino",
    android: "Roboto",
});

interface AppShellState {
    stars: Asset;
    planets: Asset;
    sky: Asset;
    world: Asset;
    prince: Asset;
    all: Asset;
}

class AppShell extends React.Component<{}, AppShellState> {
    constructor(props: any) {
        super(props);

        this.state = {
            stars: new Asset(require("./assets/stars.png"), globalScale, globalScale, { width: 1682 , height: 2480 }),
            planets: new Asset(require("./assets/planets.png"), globalScale, globalScale, { width: 382 , height: 299 }),
            sky: new Asset(require("./assets/sky.png"), .26, .26, { width: 1654 , height: 1260 }),
            world: new Asset(require("./assets/princeWorld.png"), globalScale, globalScale, { width: 1263 , height: 1100 }),
            prince: new Asset(require("./assets/travelingPrince.png"), globalScale, globalScale, { width: 1264 , height: 1372 }),
            all: new Asset(require("./assets/fullImage.png"), scaleX, scaleY, { width: 1682 , height: 2480 }),
        };
    }

    public render() {
        const h = window.height, w = window.width;
        const { stars, planets, sky, world, prince, all } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: AppColors.Space, }}>
                <View style={{ flex: 1, position: "absolute", height: h, width: w, transform: [{ translateY: h - stars.size.height }] }}>
                    <Image source={stars.asset}
                        style={{ position: "absolute", height: stars.size.height, width: stars.size.width }}
                    />
                    <Image source={sky.asset}
                        style={{
                            position: "absolute",
                            height: sky.size.height, width: sky.size.width,
                            transform: [{ translateX: 0 }, { translateY: stars.size.height - sky.size.height }]
                        }}
                    />
                    <Image source={world.asset}
                        style={{
                            position: "absolute",
                            height: world.size.height, width: world.size.width,
                            transform: [{ translateX: 0 }, { translateY: stars.size.height - world.size.height }]
                        }}
                    />
                    <Image source={planets.asset}
                        style={{
                            position: "absolute",
                            height: planets.size.height, width: planets.size.width,
                            transform: [{ translateX: w - planets.size.width }, { translateY: (h - 150) - planets.size.height }]
                        }}
                    />
                    <Image source={prince.asset}
                        style={{
                            position: "absolute",
                            height: prince.size.height, width: prince.size.width,
                            transform: [{ translateX: 60 }, { translateY: 22 }]
                        }}
                    />
                </View>
                <View style={{ flex: 1, margin: 40, backgroundColor: "transparent" }}>
                    <Text style={{ flex: 1, fontSize: 24, fontFamily: appFontFamily, textAlign: "center", textAlignVertical: "center", color: "white" }}>
                        Do you know the story of 'Le Petit Prince'?
                    </Text>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <Button title="Want to know more" onPress={() => { }} />
                    </View>
                </View>
            </View>
        );
    }
}

AppRegistry.registerComponent("basicAnimations", () => AppShell);