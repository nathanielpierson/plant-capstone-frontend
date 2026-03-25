import { SchedulesShow } from "./SchedulesShow";
import { SchedulesCreate } from "./SchedulesCreate";
import axios from "axios";
import { useState, useEffect } from "react";

export function SchedulesPage() {
  const [schedules, setSchedules] = useState([]);
  const [users, setUsers] = useState([]);

  const handleIndex = () => {
    axios.get("/schedules.json").then((response) => {
      setSchedules(response.data);
    });
  };
  useEffect(handleIndex, []);

  const handleUsersIndex = () => {
    axios.get("/users.json").then((response) => {
      setUsers(response.data);
    });
  };
  useEffect(handleUsersIndex, []);

  const handleCreate = (params, successCallback) => {
    axios
      .post("/schedules.json", params)
      .then((response) => {
        setSchedules([...schedules, response.data]);
        successCallback();
      });
  };

  const handleUpdate = () => {
    axios.put(`/schedules.json`);
  };

  const handleWatered = (schedule) => {
    axios.put(`/schedules/${schedule.id}/water.json`).then((response) => {
      setSchedules((prev) =>
        prev.map((s) => (s.id === schedule.id ? response.data : s))
      );
    });
  };

  const handleDestroy = (schedule) => {
    axios.delete(`/schedules/${schedule.id}.json`).then(() => {
      setSchedules(schedules.filter((p) => p.id !== schedule.id));
    });
  };

  return (
    <div>
      <SchedulesShow
        schedules={schedules}
        onWatered={handleWatered}
        onUpdate={handleUpdate}
        onDestroy={handleDestroy}
      />
      <SchedulesCreate
        onIndex={handleIndex}
        onCreate={handleCreate}
        onWatered={handleWatered}
      />
    </div>
  );
}
