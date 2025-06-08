import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";
import { UsersNew } from "./UsersNew";
import { SchedulesShow } from "./SchedulesShow";

export function UsersPage() {
  const [users, setUsers] = useState([]);

  const handleIndex = () => {
    axios.get("/users.json").then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(handleIndex, []);
  console.log("users in UsersPage");
  console.log(users);
  return (
    <div>
      <UsersIndex users={users} />
      <UsersNew />
    </div>
  );
}
