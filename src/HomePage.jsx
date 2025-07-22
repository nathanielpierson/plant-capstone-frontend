import { Link } from "react-router-dom";

export function HomePage() {
  if (localStorage.jwt) {
    return (
      <div>
        <h1>Welcome to &nbsp;
        <img src={`/public/images/Saladbar-logo-new.png`}
          height="120"
          width="180"
          className="inline-block hover-opacity"
          alt="Plant App Logo"
        />
        &nbsp;!</h1>
        <br></br>
        <Link to="/schedules"> Your plant schedules </Link>
      </div>
    );
  } else {
  }
  return <p>please log in!</p>;
}

