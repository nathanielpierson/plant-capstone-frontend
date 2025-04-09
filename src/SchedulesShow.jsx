import { useState } from "react";

export function SchedulesShow({ users }) {
  const [isSchedulesShowVisible, setIsSchedulesShowVisible] = useState(false);
  const [currentSchedule, setCurrentSchedule] = useState([]);
  const [user, setUser] = useState();
  const handleShow = () => {
    console.log("button pressed");
    if (localStorage.jwt) {
      console.log("user is signed in");
      setIsSchedulesShowVisible(true);
      setUser(1);
    }
  };
  if (isSchedulesShowVisible) {
    return users.map((user) => (
      <div key={user.id}>
        <h2>logged in as {user.name}</h2>
      </div>
    ));
  } else {
    return (
      <div>
        <button onClick={handleShow}>bomtom</button>
        <p>return</p>
      </div>
    );
  }
}
