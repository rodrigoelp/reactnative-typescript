/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList,
  NativeModules
} from 'react-native';

var FontLookup = require("NativeModules").FontLookup;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload!!!!!!,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fonts: [],
      size: 0
    };
  }

  componentDidMount() {
    this.fetchFonts();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! {this.state.size}
        </Text>
        <FlatList style={{ flex: 1 }} data={this.state.fonts}
          renderItem={({ item }) => <Text>{item}</Text>}
        />
      </View>
    );
  }

  fetchFonts() {
    if (Platform.OS == "ios") {
      const fonts = FontLookup.getRegisteredFonts(
        (error, fonts) => {
          fonts.forEach(function (f) {
            console.log("Found: " + f);
          }, this);
          this.setState({ fonts, size: fonts.lenght })
        });
    } else if (Platform.OS == "android") {
      const fonts = NativeModules.FontLookup.getRegisteredFonts();
      if (fonts === undefined) {
        this.setState({ fonts, size: -1 });
      }
      else {
        this.setState({ fonts, size: fonts.lenght });
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
