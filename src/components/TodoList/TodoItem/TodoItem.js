import React from 'react'
import { View, Text } from "react-native"
import { CheckBox } from "@rneui/themed";
import styles from './Styles';

 
export default function TodoItem(props){ 
//    async function updateItemStatus(item){
//         item.completed = !item.completed;
//         const response = await api.put(`/todos/${item.id}`, item)

//         console.log(response)
//     }

    return(
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}> 
                    <Text style={styles.dayCotation}>{props.title}</Text>
                </View>
            </View>
             <View style={styles.contextRigth}>
                <CheckBox
                    center
                    checked={props.completed}
                    //onPress={() => setCheck1(!check1)}
                />                                              
             </View>
        </View>
    )
}