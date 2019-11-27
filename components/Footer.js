import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Footer = () => {
  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          alert("You clicked button!");
        }}
      >
        <Text style={styles.buttonsText}> 1 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          alert("You clicked button!");
        }}
      >
        <Text style={styles.buttonsText}> 2 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          alert("You clicked button!");
        }}
      >
        <Text style={styles.buttonsText}> 3 </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => {
          alert("You clicked button!");
        }}
      >
        <Text style={styles.buttonsText}> 4 </Text>
      </TouchableOpacity>
    </View>
  );
};
export default Footer;


const styles = StyleSheet.create({
buttonsContainer: {
  margin: 20,
  flexDirection: "row",
  alignItems: "center",
  alignContent: "space-between"
},
buttons: {
  alignItems: "center",
  backgroundColor: "#3D0000",
  width: 50,
  height: 30,
  borderColor: "#FFFFFF",
  borderWidth: 2,
  borderRadius: 5,
  marginTop: 30,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  elevation: 5,
  position: "relative",
  marginRight: 5
},
buttonsText: {
  fontSize: 15,
  color: "white"
}
})