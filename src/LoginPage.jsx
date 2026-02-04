import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        console.log(params);
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/plants";
      })
      .catch((error) => {
        console.log(error);
        setErrors(["Invalid email or password"]);
      });
    console.log(params);
  };

  return (
    <div id="login">
      <br></br>
      <h1>Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
    </div>
  );
}
