import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default class App extends Component {
  state = {
    time: "DAY"
  };

  render() {
    if (this.state.time === "DAY") {
      return (
        <View style={myStyles.lightContainer}>
          <Image
            source={{ uri: "http://pngimg.com/uploads/sun/sun_PNG13448.png" }}
            style={{ width: 150, height: 150, marginBottom: 150 }}
          />
          <TouchableOpacity
            style={myStyles.darkBtn}
            onPress={() => {
              this.setState({ time: "NIGHT" });
            }}
          >
            <Text style={myStyles.lightText}>Night</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={myStyles.darkContainer}>
          <Image
            source={{
              uri: "https://i.ya-webdesign.com/images/moon-icon-png-8.png"
            }}
            style={{ width: 150, height: 150, marginBottom: 150 }}
          />
          <TouchableOpacity
            style={myStyles.lightBtn}
            onPress={() => {
              this.setState({ time: "DAY" });
            }}
          >
            <Text style={myStyles.darkText}>Day</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const myStyles = StyleSheet.create({
  lightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  lightBtn: {
    backgroundColor: "#FFF",
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10
  },
  darkContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  darkBtn: {
    backgroundColor: "#000",
    paddingHorizontal: 60,
    paddingVertical: 10,
    borderRadius: 10
  },
  lightText: {
    color: "#FFF"
  },
  darkText: {
    color: "#000"
  }
});
