import { useState, useEffect } from "react";
import axios from "axios";

export function UsersUpdate({onUpdate}) {
   const [user, setUser] = useState(null);
   const [selectedFile, setSelectedFile] = useState(null);
   const [preview, setPreview] = useState(null);
   const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios.get("/users/current.json").then((response) => {
      setUser(response.data);
      setImageUrl(response.data.image_url || "");
    });
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlChange = (event) => {
    setImageUrl(event.target.value);
    setSelectedFile(null);
    setPreview(null);
  };

  const request = (event) => {
    event.preventDefault();
    const form = event.target;
    
    if (selectedFile) {
      // File upload using FormData
      const formData = new FormData();
      formData.append('image', selectedFile);
      const successCallback = () => {
        form.reset();
        setSelectedFile(null);
        setPreview(null);
      };
      onUpdate(formData, successCallback);
    } else if (imageUrl) {
      // URL upload (backward compatibility)
      const params = {
        image_url: imageUrl
      };
      const successCallback = () => form.reset();
      onUpdate(params, successCallback);
    }
    
    // Small delay to allow upload to complete before redirect
    setTimeout(() => {
      window.location.href = "/profile";
    }, 500);
  };

  const displayImage = preview || imageUrl || (user?.image_url) || "/images/default-plant-man.png";

  return (
    <div>
      <div>
        {user ? (
          <form onSubmit={request} encType="multipart/form-data">
            <p>you are {user.name}</p>
            
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="image-upload" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                Upload Profile Picture:
              </label>
              <input 
                id="image-upload"
                name="image" 
                type="file" 
                accept="image/*"
                onChange={handleFileChange}
                style={{ marginBottom: "0.5rem" }}
              />
              {selectedFile && (
                <p style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.25rem" }}>
                  Selected: {selectedFile.name}
                </p>
              )}
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="image-url" style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>
                Or paste image URL:
              </label>
              <input 
                id="image-url"
                defaultValue={user.image_url} 
                name="image_url" 
                type="text" 
                value={imageUrl}
                onChange={handleUrlChange}
                placeholder="https://example.com/image.jpg"
                style={{ width: "100%", maxWidth: "400px", padding: "0.5rem" }}
              />
            </div>

            {displayImage && (
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ marginBottom: "0.5rem", fontWeight: "500" }}>Preview:</p>
                <img 
                  src={displayImage} 
                  alt="Profile preview" 
                  style={{ 
                    width: "150px", 
                    height: "150px", 
                    objectFit: "cover", 
                    borderRadius: "50%",
                    border: "3px solid #4a7c2a",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                  }}
                  onError={(e) => {
                    e.target.src = "/images/default-plant-man.png";
                  }}
                />
              </div>
            )}

            <button type="submit" style={{ 
              padding: "0.5rem 1.5rem", 
              backgroundColor: "#4a7c2a", 
              color: "white", 
              border: "none", 
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "background-color 0.3s ease"
            }}>
              Submit
            </button>
          </form>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}