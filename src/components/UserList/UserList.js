import React, { Fragment, useState, useEffect } from "react";
import { FlatList } from "react-native";
import api from "../../../services";
import UserItem from "./UserItem/UserItem";
import Loading from "../Loading/Loading";
import { set } from "react-native-reanimated";
import styles from "./UserItem/Styles";

export default function UserList({ navigation }) {
  const [userItem, setUserItem] = useState([]);

  function getUserList() {
    const userList = [];
    for (let user of userItem) {
      const foundUser = userList.find((u) => u?.userId === user.userId);
      if (!foundUser) {
        userList.push(user);
      }
    }
    return userList;
  }

  console.log(getUserList());

  const userList = getUserList();
  const userListWithTodos = userList.map((u) => {
    return {
      userId: u.userId,
      todoList: userItem.filter((i) => i.userId === u.userId),
    };
  });

  console.log(userListWithTodos[0]);
  //const [userIdFilter, setUserIdFilter] = useState(null);

  useEffect(() => {
    api
      .get("/todos")
      .then((results) => {
        setUserItem(results.data);
        console.log();
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <Fragment>
      {userItem ? (
        <FlatList
          style={styles.total}
          data={userListWithTodos}
          renderItem={({ item }) => {
            return <UserItem userId={item.userId} user={item} />;
          }}
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}
