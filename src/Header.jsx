import {useState, useEffect} from "react";
import axios from "axios";

export function Header() {
  const [userImage, setUserImage] = useState("");
  const [userName, setUserName] = useState("");
  const findUserImage = () => {
    axios.get("/users/current.json").then((response) => {
    setUserImage(response.data.image_url)
    setUserName(response.data.name)
    });
  };
  useEffect(findUserImage, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <div className="navbar-brand-container">
            {localStorage.jwt ? (
              <a href="/profile" className="profile-image-link">
                <img
                  src={userImage || "/images/default-plant-man.png"}
                  width="45"
                  height="45"
                  alt="User Profile"
                  className="profile-image"
                  onError={(e) => {
                    e.target.src = "/images/default-plant-man.png";
                  }}
                />
              </a>
            ) : null}
            <a className="navbar-brand" href="/">
              <span className="brand-icon">🌱</span>
              <span className="brand-text">Saladbar: The Plant Growing App</span>
            </a>
          </div>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/schedules">
                  {localStorage.jwt
                    ? `${userName}'s watering schedules`
                    : "user's plant schedules"}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/plants">
                  All plants
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu custom-dropdown">
                  <li>
                    <a className="dropdown-item" href="/about">
                      About the app
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/login">
                      Log in
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/profile">
                      Add or change profile picture
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="welcome-message">
        {localStorage.jwt ? (
          <p>Hello {userName}! 🌿</p>
        ) : (
          <p>Hello user! Either log in, or create an account to see your plants! 🌱</p>
        )}
      </div>
    </div>
  );
}
