import axios from "axios";

export function handleUserUpdate( params, 
  successCallback )
  {
  let successResponse;
  
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
    }).catch(() => {})
    return successResponse;
}
