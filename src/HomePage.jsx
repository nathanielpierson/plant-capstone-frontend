import { Link } from "react-router-dom";

export function HomePage() {
  if (localStorage.jwt) {
    return (
      <div>
        <p>Welcome to plants app!</p>
        <Link to="/schedules"> Your plant schedules </Link>
      </div>
    );
  } else {
  }
  return <p>please log in!</p>;
}
