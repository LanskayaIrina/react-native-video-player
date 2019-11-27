import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import Footer from "./Footer";
import { Actions } from "react-native-router-flux";

const playList = [
  {
    key: "Track 1",
    title: "Bebe Rexha - You cant stop the girl",
    uri:
      " https://ruvct.cleepr.icu/videos/bebe-rexha-you-cant-stop-the-girl_210624.mp4 "
  },
  {
    key: "Track 2",
    title: "Imagine Dragons - Bad liar",
    uri: " https://ruvcs.cleepr.icu/videos/imagine-dragons-bad-liar_187788.mp4 "
  },
  {
    key: "Track 3",
    title: "Clean Bandit - Rockabye",
    uri:
      " https://ruvcs.cleepr.icu/videos/clean-bandit-rockabye-feat-sean-paul-anne-marie_489292.mp4 "
  },
  {
    key: "Track 4",
    title: "The black eyed peas - Wheresthelove feat the world",
    uri:
      " https://ruvcz.cleepr.icu/videos/the-black-eyed-peas-wheresthelove-feat-the-world_263019.mp4 "
  }
];

function renderTrack(item) {
  return (
    <TouchableOpacity
      style={styles.trackButtons}
      onPress={() => Actions.player({ title: item.title, item: item })}
    >
      <Text style={styles.trackText}>{item.key} </Text>
    </TouchableOpacity>
  );
}

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.textStyle}>Music</Text>
      </View>
      <FlatList data={playList} renderItem={({ item }) => renderTrack(item)} />
      <Footer />
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFE7AE",
    alignItems: "center",
    justifyContent: "space-between"
  },
  containerHeader: {
    backgroundColor: "#3D0000",
    height: 80,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 5,
    position: "relative",
    borderColor: "#FFFFFF",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    paddingLeft: 80,
    paddingRight: 80,
    marginTop: 30
  },
  textStyle: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "AvenirNext-DemiBold",
    textShadowColor: "#000",
    textShadowOffset: { width: 0, height: 2 },
    textShadowOpacity: 0.8,
    elevation: 5,
    textTransform: "uppercase"
  },
  trackButtons: {
    alignItems: "center",
    backgroundColor: "#C4B38B",
    width: 200,
    height: 50,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 30
  },
  trackText: {
    fontSize: 20,
    color: "#3D0000",
    textTransform: "uppercase",
    fontWeight: "600",
    textShadowColor: "white",
    textShadowOffset: { width: 0, height: 1 },
    textShadowOpacity: 0.8,
    padding: 5
  }
});
