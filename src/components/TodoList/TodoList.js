import React, { Fragment, useState, useEffect } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem/TodoItem";
import api from "../../../services";
import Loading from "../Loading/Loading";

export default function TodoList({ navigation }) {
  const [todoListItem, setTodoLiostItem] = useState(null);

  useEffect(() => {
    api
      .get("/todos")
      .then((results) => {
        setTodoLiostItem(results.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <Fragment>
      {todoListItem ? (
        <FlatList
          data={todoListItem}
          renderItem={({ item }) => {
            return <TodoItem title={item.title} completed={item.completed} />;
          }}
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}
