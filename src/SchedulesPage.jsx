import { SchedulesShow } from "./SchedulesShow";
import { SchedulesIndex } from "./SchedulesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function SchedulesPage() {
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentSchedule, setCurrentSchedule] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/schedules.json").then((response) => {
      console.log(response.data);
      setSchedules(response.data);
    });
  };
  useEffect(handleIndex, []);

  const handleUsersIndex = () => {
    axios.get("http://localhost:3000/users.json").then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(handleUsersIndex, []);

  return (
    <div>
      <SchedulesIndex schedules={schedules} />,
      <SchedulesShow users={users} />
    </div>
  );
}
