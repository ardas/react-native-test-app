import React from "react";
import { TouchableOpacity, Text, View, Image, StyleSheet } from "react-native";
import PlaceIcon from "./PlaceIcon";
import { metrics } from "../../../themes";

export default ({ place }) => (
  <TouchableOpacity style={style.container}>
    <Image source={{ uri: place.image }} style={StyleSheet.absoluteFill} />
    <View style={style.backdrop} />
    <View style={style.iconContainer}>
      <PlaceIcon name={place.icon} size={30} />
      <Text style={style.name}>{place.name}</Text>
    </View>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  container: {
    height: 90,
    flex: 1,
    borderRadius: metrics.base,
    overflow: "hidden",
    margin: 3
  },
  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  name: {
    color: "white"
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    height: "100%"
  }
});
