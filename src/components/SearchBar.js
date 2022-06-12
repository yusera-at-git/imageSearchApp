import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  PixelRatio,
  Dimensions,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const SearchBar = (props) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome5
        name="search"
        size={25}
        color="white"
        style={{ alignSelf: "center", marginHorizontal: 5 }}
      />
      <TextInput
        value={props.term}
        autoCapitalize="none"
        autoCorrect={false}
        style={[
          styles.inputStyle,
          {
            fontSize: 20,
          },
        ]}
        placeholder="Search Here"
        placeholderTextColor={"white"}
        onChangeText={props.setTerm}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    borderColor: "white",
    borderWidth: 1,
    backgroundColor: "rgb(25, 15, 22)",
    height: 50,
    margin: 15,
    borderRadius: 10,
    paddingLeft: 5,
    flexDirection: "row",
  },
  inputStyle: {
    alignSelf: "center",
    // fontSize: 20,
    color: "white",

    textDecorationLine: "none",
    textDecorationColor: "transparent",
    flex: 1,
    marginHorizontal: 8,
  },
});

export default SearchBar;
