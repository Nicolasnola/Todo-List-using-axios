import React, { useState } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TodoList from "./TodoList";
import CompletedList from "./completed/completedList";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({ route }) {
  const [userTopList, setUserTopList] = useState(route.params.todoList);
  console.log("oi");
  const inCompletedFilter = userTopList.filter((u) => u.completed === false);

  function deleteTodo(deleteTitle) {
    const filterTitle = userTopList.filter(
      (todoListItem) => todoListItem.title !== deleteTitle
    );
    setUserTopList(filterTitle);
  }
  function setCheck(item) {
    const newList = userTopList.map((u) => {
      return u.id === item.id ? { ...u, completed: !u.completed } : u;
    });
    setUserTopList(newList);
  }
  const completedFilter = userTopList.filter((u) => u.completed === true);

  //console.log(userTopList);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="todolist"
        children={() => (
          <TodoList
            userTop={userTopList}
            inCompletedFilter={inCompletedFilter}
            deleteTodo={deleteTodo}
            setCheck={setCheck}
          />
        )}
      />
      <Tab.Screen
        name="Completed"
        children={() => (
          <CompletedList
            userTop={userTopList}
            completedFilter={completedFilter}
            deleteTodo={deleteTodo}
            setCheck={setCheck}
          />
        )}
      />
    </Tab.Navigator>
  );
}
