import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function Loading(){
    return(
        <View style={styles.loadView}>
            <Text style={styles.loadingSt}>Loading</Text>
        </View>
    )
}