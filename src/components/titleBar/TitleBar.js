import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function TitleBar(){
    return(

        <View style={styles.titleView}>
            <Text style={styles.titleText}>Todo-List</Text>
        </View>

    );
}