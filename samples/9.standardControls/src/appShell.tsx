import * as React from "react";
import {
    Image, Text, TextInput, View, ScrollView, // all common controls
    Button, Picker, Slider, Switch, // common controls.
    ActivityIndicator,
    TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, TouchableWithoutFeedback,
    Alert, Platform, DatePickerIOS, MaskedView
} from "react-native";

const googleImage = "https://lh3.googleusercontent.com/PUSNI1Jw5QGR2Hkt1vidxzH7zwTwx6CmmHPe7PqpsuSYV1bgDa1X9_3O1IlRNrkmK9hWBnjX0sjnM5BSYmF_HY2DZAGggpqSs6VISwly=s660";

class AppShell extends React.Component {
    public render() {
        return (
            <ScrollView style={{ paddingTop: 30 }} contentContainerStyle={{ paddingBottom: 25 }} alwaysBounceVertical={true}>
                <Text>Rendering all controls at once:</Text>
                <Text>All these components should be recognised on both platforms.</Text>
                <TextInput style={{ margin: 8 }} placeholder="TextInput without styling..." keyboardAppearance="dark" />
                <TextInput style={{ margin: 8, borderRadius: 8, borderColor: "lightsteelblue", borderWidth: 1, padding: 8 }}
                    placeholder="It requires styling... 😓" keyboardAppearance="dark" />
                <Image source={{ uri: googleImage, height: 126, width: 330 }} />
                <Button title="I am a button" onPress={() => Alert.alert("You clicked on a button!")} />
                <Picker onValueChange={(value, index) => Alert.alert(`Selected ${value} at index ${index}`)}>
                    <Picker.Item label="The answer of life, universe and everything?" value="42" />
                    <Picker.Item label="The knower of nothing?" value="Jon" />
                    <Picker.Item label="Something something something..." value="dark side" />
                </Picker>
                <Slider minimumValue={0} maximumValue={100} value={50} onSlidingComplete={(value) => Alert.alert(`Did you request ${value}?`)} />
                <Switch onValueChange={(v) => Alert.alert(v ? "Is on! 😋" : "is Off 😒")} />
                <ActivityIndicator size="large" color="#ff00ff" animating={true} />
                <TouchableHighlight
                    style={{ margin: 10, borderRadius: 8, borderColor: "darkred", borderWidth: 1, backgroundColor: "darkred" }}
                    onPress={() => Alert.alert("Tap tap, tappity tap 1")}>
                    <View >
                        <Text style={{ margin: 30 }}>Button</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity
                    style={{ margin: 10, borderRadius: 8, borderColor: "darkred", borderWidth: 1, backgroundColor: "darkred" }}
                    onPress={() => Alert.alert("Tap tap, tappity tap 2")}>
                    <View >
                        <Text style={{ margin: 30 }}>Button</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    style={{ margin: 10, borderRadius: 8, borderColor: "darkred", borderWidth: 1, backgroundColor: "darkred" }}
                    onPress={() => Alert.alert("Tap tap, tappity tap 3")}>
                    <View >
                        <Text style={{ margin: 30 }}>Button</Text>
                    </View>
                </TouchableWithoutFeedback>
                {this.getSupportedComponentsOfThisPlatform()}
            </ScrollView>
        )
    }

    private getSupportedComponentsOfThisPlatform = () => {
        return Platform.select({
            ios: this.getSupportForIOs(),
            android: this.getSupportForAndroid()
        });
    }

    private getSupportForIOs() {
        const minDate = new Date(1970, 1, 1);
        const currentDate = new Date(Date.now());
        const maxDate = new Date(2100, 12, 31);
        return (
            <View style={{ paddingTop: 24, paddingLeft: 4, paddingRight: 4, borderColor: "lightblue", borderWidth: 1 }}>
                <Text>These are supported.</Text>
                <DatePickerIOS
                    date={currentDate}
                    minimumDate={minDate}
                    maximumDate={maxDate}
                    onDateChange={(v) => Alert.alert(`You picked ${v.toDateString()}`)}
                />
                {/* <MaskedView style={{ flex: 1 }}
                    maskElement={(
                        <View>
                            <Text>
                                Basic Mask
                            </Text>
                        </View>
                    )}>
                    <View style={{ flex: 1, backgroundColor: 'blue' }} />
                </MaskedView> */}
            </View>
        );
    }

    private getUnsupportForIOs() {
        return (
            <View style={{ paddingTop: 24, paddingLeft: 4, paddingRight: 4, borderColor: "gray", borderWidth: 1 }}>
                <Text>These are unsupported</Text>
                <TouchableNativeFeedback
                    onPress={() => Alert.alert("Tap tap, tappity tap")}
                >
                    <View style={{ backgroundColor: 'red' }}>
                        <Text style={{ margin: 30 }}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }


    private getSupportForAndroid() {
        return (
            <View style={{ paddingTop: 24, paddingLeft: 4, paddingRight: 4, borderColor: "gray", borderWidth: 1 }}>
                <Text>These are unsupported</Text>
                <TouchableNativeFeedback
                    onPress={() => Alert.alert("Tap tap, tappity tap")}
                // background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={{ backgroundColor: 'red' }}>
                        <Text style={{ margin: 30 }}>Button</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    }
}

export { AppShell };