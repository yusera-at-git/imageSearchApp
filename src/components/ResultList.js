import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ReasultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";
const ResultList = (props) => {
  if (!props.results.length) {
    return null;
  }
  return (
    <View style={styles.constainer}>
      <Text style={styles.headerStyle}>{props.title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={props.results}
        keyExtractor={(key) => {
          return key.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                props.navigation.navigate("ResultShow", { id: item.id })
              }
            >
              <ReasultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  constainer: {
    marginHorizontal: 5,
  },
  headerStyle: {
    fontSize: 18,
    fontWeight: "200",
    alignSelf: "center",
    marginBottom: 10,
  },
});
export default withNavigation(ResultList);
