import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";
import { TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native";

export default function UserItem({ userId, navigation }) {
  //const [indicator, setIndicator] = useState(completed);

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("TodoList")}>
        <View style={styles.mainContent}>
          <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
              <Text style={styles.dayCotation}>User {userId}</Text>
            </View>
          </View>
          <View style={styles.contextRigth}>
            <Image
              style={styles.userLogo}
              source={{
                uri: "https://img2.gratispng.com/20180331/khw/kisspng-computer-icons-user-clip-art-user-5abf13d4b67e20.4808850915224718927475.jpg",
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}