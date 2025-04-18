import {useState, useEffect} from "react";
import axios from "axios";

export function Header() {
  const [userImage, setUserImage] = useState("");
  const findUserImage = () => {
    axios.get("http://localhost:3000/users/current.json").then((response) => {
    setUserImage(response.data.image_url)
    });
  };
  useEffect(findUserImage, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
      <img src={userImage} width="40" height="40"/>
          <a className="navbar-brand" href="#">
            Saladbar: The Plant-growing App
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
                <a className="nav-link" href="https://cdn.triforcewiki.com/thumb/d/d5/Link_TLoZ_artwork.png/1200px-Link_TLoZ_artwork.png">
                  Link
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
                    <a className="dropdown-item" href="users">
                      Users
                    </a>
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
                  <li>
                    <a className="dropdown-item" href="/schedules">
                      your plant schedule
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
