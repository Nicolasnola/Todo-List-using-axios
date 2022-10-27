import React, { Fragment, useState } from "react";
import { View, Text, Image } from "react-native";
import { CheckBox } from "@rneui/themed";
import styles from "./Styles";
import { TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native";

export default function TodoItem({ completed, title }) {
  const [indicator, setIndicator] = useState(completed);

  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <Text style={styles.dayCotation}>{title}</Text>
        </View>
      </View>
      <View style={styles.contextRigth}>
        <CheckBox
          center
          checked={indicator}
          onPress={() => setIndicator(!indicator)}
        />
        <Image
          style={styles.deleteLogo}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/101px-Delete-button.svg.png?20200716131229",
          }}
        />
      </View>
    </View>
  );
}
