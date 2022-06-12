import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import unsplash from "../api/unsplash";
import ResultDetails from "../components/ResultDetails";
// import useSearch from '../hooks/useSearch';
// import SearchBar from '../components/SearchBar';

const ResultsShowScreen = (props) => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [results, errorMessage, searchApi] = useSearch();
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const id = props.navigation.getParam("id");
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState("");
  const getPhoto = async (id) => {
    try {
      const response = await unsplash.get(`/photos/${id}`);
      setPhoto(response.data);
      setError("");
    } catch (e) {
      setError("Something went wrong");
    }
  };
  useEffect(() => {
    getPhoto(id);
  }, []);
  if (!photo) {
    return null;
  }

  photo !== null &&
    Image.getSize(
      photo.urls.full,
      (w, h) => {
        setHeight(Dimensions.get("window").width * (h / w));
      },
      () => console.log("error")
    );
  return (
    <ScrollView style={{ flex: 1 }}>
      {/* <Text>
        Results Show Screen {photo.id} {photo.alt_description}
      </Text> */}
      {/* 
            <SearchBar 
            term={searchTerm} 
            setTerm={setSearchTerm}
            onTermSubmit={()=>searchApi(searchTerm)}/>
            {errorMessage?
            <Text>
                {errorMessage}
            </Text>:
            null} */}

      <View
        style={{
          width: "98%",
          alignSelf: "center",
          overflow: "hidden",
          alignItems: "center",
          borderTopRadius: 10,
          justifyContent: "center",
        }}
      >
        <Image
          style={[
            styles.imageStyle,
            height && { height: height, borderRadius: 10 },
          ]}
          source={{ uri: photo.urls.full }}
        />
        <Text adjustsFontSizeToFit numberOfLines={1}>
          {photo.alt_description}
        </Text>
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          style={styles.descriptionStyle}
        >
          {photo.description}
        </Text>
      </View>

      {photo != null && (
        <>
          <View
            style={{
              margin: 10,
              marginBottom: 0,
            }}
          >
            <Text style={{ fontWeight: "700" }}>Related Images:</Text>
          </View>
          <FlatList
            style={{
              margin: 10,
              marginHorizontal: 0,
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={photo.related_collections.results}
            keyExtractor={(key) => {
              return key.id;
            }}
            renderItem={({ item }) => {
              return item.cover_photo.urls != undefined ? (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    props.navigation.navigate("ResultShow", { id: item.id })
                  }
                >
                  <ResultDetails result={item.cover_photo} />
                </TouchableOpacity>
              ) : null;
            }}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  descriptionStyle: {
    // color: 'blue',
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});

export default ResultsShowScreen;
