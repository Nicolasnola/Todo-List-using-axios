import React, { Fragment } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem/TodoItem";

export default function TodoList(props) {
  return (
    <Fragment>
      <FlatList
        data={props.items}
        renderItem={({ item }) => {
          return <TodoItem title={item.title} completed={item.completed} />;
        }}
      />
    </Fragment>
  );
}
