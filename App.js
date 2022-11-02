import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodoList from "./src/components/TodoList/TodoList";
import UserList from "./src/components/UserList/UserList";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator inistialRouteName="UserList">
        <Stack.Screen
          name="UserList"
          component={UserList}
          options={{
            headerStyle: {
              backgroundColor: "#34495E",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="TodoList"
          component={TodoList}
          options={{
            headerStyle: {
              backgroundColor: "#34495E",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// return (
//   <View style={teste.container}>
//     <TitleBar />
//     {items ? <UserList items={items} /> : <Loading />}
//   </View>
// );

const teste = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AEB6BF",
    alignItems: "center",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  stackBar: {
    marginBottom: 10,
  },
});

export default App;
