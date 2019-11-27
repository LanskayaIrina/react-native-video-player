import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Video } from 'expo-av';
import Footer from "./Footer";
import { Actions } from "react-native-router-flux";

class Player extends React.Component {
  componentWillReceiveProps() {
    Actions.refresh({ title: this.props.item.title });
  }
  render() {
    return (
      <View style={styles.videoContainer}>
        <Text style={styles.textVideo}>Playing now: {this.props.item.title}</Text>
        <Video
          source={{ uri: this.props.item.uri }}
          // rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          useNativeControls
          style={{ width: 300, height: 300 }}
        />

        <Footer />
      </View>
    );
  }
}

export default Player;

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: "#FFE7AE",
    alignItems: "center",
    justifyContent: "space-between"
  },
  textVideo: {
    fontSize: 25,
    fontWeight: 600,
  },
  playerVideo: {
    top: 0,
    left: 0
  }
});
