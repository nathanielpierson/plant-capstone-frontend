import axios from "axios";
import { useState, useEffect } from "react";
import {ProfilePage} from "./ProfilePage";
import { handleUserUpdate } from "./helpers/AddPicture";

export function UsersShow() {
  const [youPersonally, setYouPersonally] = useState([])
  const handleIndex = () => {
    axios.get(`/users/current.json`).then((response) => {
      setYouPersonally(response.data);
    });
  };
  useEffect(handleIndex, [youPersonally]);
  return (
    <div>
      <p>{youPersonally.name}</p>
      <p>UsersShow</p>
      <ProfilePage onUpdate={handleUserUpdate}/>
    </div>
  )
}