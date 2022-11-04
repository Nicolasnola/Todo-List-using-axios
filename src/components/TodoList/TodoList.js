import React, { Fragment, useState, useEffect } from "react";
import { FlatList } from "react-native";
import TodoItem from "./TodoItem/TodoItem";
import api from "../../../services";
import Loading from "../Loading/Loading";
import styles from "./TodoItem/Styles";

export default function TodoList({
  navigation,
  inCompletedFilter,
  deleteTodo,
  setCheck,
}) {
  return (
    <Fragment>
      {inCompletedFilter ? (
        <FlatList
          style={styles.total}
          data={inCompletedFilter}
          renderItem={({ item }) => {
            return (
              <TodoItem
                title={item.title}
                completed={item.completed}
                id={item.id}
                item={item}
                deleteTodo={deleteTodo}
                setCheck={setCheck}
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
