import { Link } from "react-router-dom";

export function HomePage() {
  if (localStorage.jwt) {
    return (
      <div>
        <h1>Welcome to &nbsp;
        <img src="/Plant-app-logo.png" height="60" width="60" className="inline-block hover-opacity" alt="Plant App Logo"/>
        &nbsp; app!</h1>
        <br></br>
        <Link to="/schedules"> Your plant schedules </Link>
      </div>
    );
  } else {
  }
  return <p>please log in!</p>;
}
