import axios from "axios";
import { useState } from "react";
import { ProfilePage } from "./ProfilePage";

export function AddPicture() {
  const [images, setImages] = useState([]);

  const handleUpdate = (params, successCallback) => {
    axios.put("/users/current.json", params).then((response) => {
      setImages([...images, response.data]);
      successCallback();
    });
  };

  return (
    <div>
      <ProfilePage onUpdate={handleUpdate} />
    </div>
  );
}
