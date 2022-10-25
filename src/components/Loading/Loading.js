import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import styles from "./styles";

export default function Loading() {
  return (
    <View style={styles.loadView}>
      <ActivityIndicator size={"large"}></ActivityIndicator>
    </View>
  );
}
