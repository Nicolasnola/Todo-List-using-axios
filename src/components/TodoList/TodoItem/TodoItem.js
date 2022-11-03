import React, { useState, useEffect } from "react";
import { View, Text, Image, SafeAreaView } from "react-native";
import { CheckBox } from "@rneui/themed";
import styles from "./Styles";
import { TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import { Checkbox } from "react-native-elements";

export default function TodoItem({ completed, title, deleteTodo, item }) {
  const [indicator, setIndicator] = useState(item.completed);

  //const [todoTitle, setTodoTitle] = useState(title);

  return (
    <View style={styles.mainContent}>
      <View style={styles.contextLeft}>
        <View style={styles.boxLogo}>
          <CheckBox
            style={styles.dayCotation}
            title={item.title}
            checkedIcon="check"
            uncheckedIcon="square-o"
            checkedColor="green"
            uncheckedColor="#AEB6BF"
            checked={indicator}
            onPress={() => setIndicator(!indicator)}
          />
        </View>
      </View>
      <View style={styles.contextRigth}>
        <View style={styles.trashBoxView}>
          {/* <CheckBox
            center
            checked={indicator}
            onPress={() => setIndicator(!indicator)}
          /> */}
          <TouchableOpacity onPress={() => deleteTodo(item.title)}>
            <Image
              style={styles.deleteLogo}
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Delete-button.svg/101px-Delete-button.svg.png?20200716131229",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
