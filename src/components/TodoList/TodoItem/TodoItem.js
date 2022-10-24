import React, {useState} from 'react'
import { View, Text } from "react-native"
import { CheckBox } from "@rneui/themed";
import styles from './Styles';

 
export default function TodoItem({completed, title}){ 

const [indicator ,  setIndicator] = useState(completed)

    return(
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
             </View>
        </View>
    )
}