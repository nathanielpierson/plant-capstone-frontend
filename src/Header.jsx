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
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
      { localStorage.jwt ? 
        <a href="/profile">
          <img
            src={userImage}
            width="40"
            height="40"
            alt="User Profile"
            className="rounded-circle"
            style={{ cursor: "pointer" }}
            />
        </a> : <a>
          h
        </a>
        }
          <a className="navbar-brand" href="#">
          &nbsp; Saladbar: The Plant Care App
          </a>
          <button
            className="navbar-toggler"
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/schedules">
                  Your Plant Schedule
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
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="profile">
                      Your Profile
                    </a>
                  </li>
                <li className="nav-item">
                  <a className="dropdown-item" href="https://cdn.triforcewiki.com/thumb/d/d5/Link_TLoZ_artwork.png/1200px-Link_TLoZ_artwork.png">
                  Link
                  </a>
                </li>
                <li>
                  <a className="dropdown-divider"></a>
                </li>
                <li>
                  <a className="dropdown-item" href="/plants">
                    Plants
                  </a>
                </li>
                <li>
                  <a className="dropdown-divider"></a>
                </li>
                <li>
                  <a className="dropdown-item" href="/login">
                    Log in
                  </a>
                </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <p>
        {localStorage.jwt ? <p> Hello {userName}! </p> : <p> "Hello user! Either log in, or create an account to see your plants!" </p>}
      </p>
    </div>
  );
}
