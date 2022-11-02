import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TodoList from "./TodoList";
import CompletedList from "./completed/completedList";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({ route }) {
  const [userTopList, setUserTopList] = useState(route.params.todoList);

  //console.log(userTopList);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="todolist"
        children={() => <TodoList userTop={userTopList} />}
      />
      <Tab.Screen
        name="Completed"
        children={() => <CompletedList userTop={userTopList} />}
      />
    </Tab.Navigator>
  );
}
