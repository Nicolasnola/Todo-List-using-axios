import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./Styles";
import { TouchableNativeFeedback } from "react-native";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

export default function UserItem({ userId, user }) {
  const [userIdFilter, setUserIdFilter] = useState(null);
  console.log(user);

  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("TodoList", user)}>
        <View style={styles.mainContent}>
          <View style={styles.contextLeft}>
            <View style={styles.boxLogo}>
              <Image
                style={styles.userLogo}
                source={require("../../../../img/user.png")}
              />
              <Text style={styles.dayCotation}>User {userId}</Text>
            </View>
          </View>
          <View style={styles.contextRigth}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
