import { Link } from "react-router-dom";

export function HomePage() {
  if (localStorage.jwt) {
    return (
      <div>
        <h1>Welcome to plants app!</h1>
        <Link to="/schedules"> Your plant schedules </Link>
      </div>
    );
  } else {
  }
  return <p>please log in!</p>;
}
