import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input id="email" name="email" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" />
        </div>
        <div className="form-group">
          <label htmlFor="password_confirmation">Confirm password:</label>
          <input id="password_confirmation" name="password_confirmation" type="password" />
        </div>
        <button type="submit" className="auth-button">Signup</button>
      </form>
      </div>
  );
}
