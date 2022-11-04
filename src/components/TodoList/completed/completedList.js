import React, { Fragment, useState, useEffect } from "react";
import { FlatList } from "react-native";

import Loading from "../../Loading/Loading";
import styles from "./Styles";
import CompletedItem from "./completedItem";

export default function CompletedList({
  navigation,
  completedFilter,
  deleteTodo,
  setCheck,
}) {
  return (
    <Fragment>
      {completedFilter ? (
        <FlatList
          style={styles.total}
          data={completedFilter}
          renderItem={({ item }) => {
            return (
              <CompletedItem
                title={item.title}
                completed={item.completed}
                id={item.id}
                deleteTodo={deleteTodo}
                setCheck={setCheck}
                item={item}
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
