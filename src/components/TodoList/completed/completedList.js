import React, { Fragment, useState, useEffect } from "react";
import { FlatList } from "react-native";

import Loading from "../../Loading/Loading";
import styles from "./Styles";
import CompletedItem from "./completedItem";

export default function CompletedList({ navigation, userTop }) {
  const [todoListItem, setTodoListItem] = useState([]);

  useEffect(() => {
    const completedFilter = userTop.filter((u) => u.completed === true);
    setTodoListItem(completedFilter);
  }, []);

  function deleteTodo(deleteTitle) {
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
              <CompletedItem
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
