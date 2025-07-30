import axios from "axios";

export function handleUserUpdate( params, 
  successCallback )
  {
  let successResponse;
    axios.put("/users/current.json", params).then((response) => {
      if (response) {
        successResponse = response.data
        successCallback();
      }
    }).catch((error) =>
    console.log(error)
    )
    return successResponse;
}
