import axios from "axios";

export function handleUserUpdate( params, 
  successCallback )
  {
  let successResponse;
  
  // Check if params is FormData (file upload) or regular object (URL)
  const isFormData = params instanceof FormData;
  
  const config = isFormData 
    ? {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    : {};
  
    axios.put("/users/current.json", params, config).then((response) => {
      if (response) {
        successResponse = response.data
        if (successCallback) {
          successCallback();
        }
      }
    }).catch((error) => {
      console.log("Error updating user:", error);
      if (error.response) {
        console.log("Response data:", error.response.data);
        console.log("Response status:", error.response.status);
      }
    })
    return successResponse;
}
