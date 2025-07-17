import { PlantCount } from "./PlantCount"
import { AddPicture } from "./AddPicture";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProfilePage({ onUpdate }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/users/current.json").then((response) => {
      setUser(response.data);
    });
  }, []);

  const request = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = {
      image_url: form.image_url.value
    };
    const successCallback = () => form.reset();
    onUpdate(params, successCallback);
  };

  return (
    <div>
      {user ? (
        <form onSubmit={request}>
          <p>you are {user.name}</p>
          image_url: <input defaultValue={user.image_url} name="image_url" type="text" />
          <button type="submit">submit</button>
        </form>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
