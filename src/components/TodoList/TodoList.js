import React, { Fragment, useState, useEffect } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem/TodoItem";
import api from "../../../services";
import Loading from "../Loading/Loading";
import styles from "./TodoItem/Styles";

export default function TodoList({ navigation, route }) {
  const [todoListItem, setTodoListItem] = useState(route.params.todoList);

  function deleteTodo(deleteTitle) {
    console.log("clickado" + deleteTitle);

    const filterTitle = todoListItem.filter(
      (todoListItem) => todoListItem.title !== deleteTitle
    );
    setTodoListItem(filterTitle);
  }

  return (
    <Fragment>
      {todoListItem ? (
        <FlatList
          style={styles.total}
          data={todoListItem}
          renderItem={({ item }) => {
            return (
              <TodoItem
                title={item.title}
                completed={item.completed}
                id={item.id}
                deleteTodo={deleteTodo}
              />
            );
          }}
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}
