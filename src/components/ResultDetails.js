import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const ResultDetails = (props) => {
  return (
    <View style={styles.constainer}>
      <View
        style={{
          height: 200,
        }}
      >
        <Image
          style={styles.imageStyle}
          source={{ uri: props.result.urls.small }}
        />
      </View>

      <Text
        style={{
          fontWeight: "bold",
          alignSelf: "flex-end",
          marginRight: 20,
        }}
      >
        {props.result.likes} likes
      </Text>
      {/* <Text>
        {props.result.description
          ? props.result.description
          : props.result.alt_description}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginLeft: 5,
    marginBottom: 10,
    width: Dimensions.get("window").width * 0.94,
    alignItems: "center",
  },
  imageStyle: {
    width: Dimensions.get("window").width * 0.94,
    borderRadius: 10,
    height: "100%",
  },
});

export default ResultDetails;
