import axios from "axios";
import { useState, useEffect } from "react";
import { UsersIndex } from "./UsersIndex";
import { UsersNew } from "./UsersNew";

export function UsersPage () {
  const [users, setUsers] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setUsers(response.data);
    })
  }
  useEffect(handleIndex, []);
console.log(users)
  return (
  <div>
    <UsersIndex users={users} />
    <UsersNew />
  </div>
  )
}