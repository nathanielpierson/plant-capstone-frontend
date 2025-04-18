import axios from "axios";

export function LogoutPage() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
    <br></br>
    <a href="#" onClick={handleClick}>
      Logout
    </a>
    </div>
  );
}
