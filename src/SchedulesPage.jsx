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
      console.log("index handled")
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

  //button to water plants is pressed, this code is run. No data input from user, the put action on the backend is what changes the data.
  const handleWatered = (schedule) => {
    axios.put(`http://localhost:3000/schedules/${schedule.id}/water.json`);
    console.log("handleWatered run");
    handleIndex();
  };

  const handleDestroy = (schedule) => {
    axios.delete(`http://localhost:3000/schedules/${schedule.id}.json`).then(() => {
    setSchedules(schedules.filter((p) => p.id !== schedule.id));
      console.log("handleDestroy run");
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
