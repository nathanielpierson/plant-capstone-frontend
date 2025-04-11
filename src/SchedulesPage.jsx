import { SchedulesShow } from "./SchedulesShow";
import { SchedulesIndex } from "./SchedulesIndex";
import { SchedulesCreate } from "./SchedulesCreate";
import axios from "axios";
import { useState, useEffect } from "react";

export function SchedulesPage() {
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);

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

  const handleCreate = (params, successCallback) => {
    console.log("schedulesPage handleCreate");
    axios
      .post("http://localhost:3000/schedules.json", params)
      .then((response) => {
        setSchedules([...schedules, response.data]);
        successCallback;
        console.log("create handled");
      });
  };

  const handleUpdate = (schedule) => {
    axios
      .patch(`http://localhost:3000/schedules/${schedule.id}.json`)
      .then((response) => {
        console.log(response.data);
      });
  };

  const handleDestroy = (schedule) => {
    axios.delete(`/schedules/${schedule.id}.json`).then(() => {
      setSchedules(schedules.filter((p) => p.id !== schedule.id));
      setIsSchedulesShowVisible(false);
    });
  };

  var admin = false;
  if (admin) {
    return (
      <div>
        <SchedulesIndex schedules={schedules} />
        <SchedulesCreate />
      </div>
    );
  } else {
    return (
      <div>
        <SchedulesShow schedules={schedules} onUpdate={handleUpdate} />
        <SchedulesCreate
          onCreate={handleCreate}
          onUpdate={handleUpdate}
          onDestroy={handleDestroy}
        />
      </div>
    );
  }
}
