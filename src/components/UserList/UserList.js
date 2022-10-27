import React, { Fragment, useState, useEffect } from "react";
import { FlatList } from "react-native";
import api from "../../../services";
import UserItem from "./UserItem/UserItem";

export default function UserList({ navigation }) {
  const [userItem, setUserItem] = useState(null);

  useEffect(() => {
    api
      .get("/todos")
      .then((results) => {
        setUserItem(results.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <Fragment>
      {userItem ? (
        <FlatList
          data={userItem}
          renderItem={({ item }) => {
            return <UserItem userId={item.userId} navigation={navigation} />;
          }}
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}
