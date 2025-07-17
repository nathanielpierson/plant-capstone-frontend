import axios from "axios"
import { useState, useEffect } from "react";

export function AddPicture() {
const [imageLink, setImageLink] = useState();
  const handleAddImage = () => {
    axios.put("/users.json").then((response) => {
      setImageLink(response.data)
    })
  }
  useEffect(handleAddImage, []);
}