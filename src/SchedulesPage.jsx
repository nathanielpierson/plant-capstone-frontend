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

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/schedules.json`);
    console.log("handleUpdate run");
  };

  const handleWatered = (schedule) => {
    axios.put(`http://localhost:3000/schedules/${schedule.id}/water.json`);
    console.log(schedule.id);
    console.log("handleWatered run");
  };

  const handleDestroy = (schedule) => {
    axios.delete(`/schedules/${schedule.id}.json`).then(() => {
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
        <SchedulesShow
          schedules={schedules}
          onWatered={handleWatered}
          onUpdate={handleUpdate}
        />
        <SchedulesCreate
          onCreate={handleCreate}
          onWatered={handleWatered}
          onDestroy={handleDestroy}
        />
      </div>
    );
  }
}
