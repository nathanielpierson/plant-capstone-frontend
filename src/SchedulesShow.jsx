import axios from "axios";
import { useState, useEffect } from "react";

export function SchedulesShow({ schedules, onWatered, onDestroy, onUpdate }) {
  useEffect(onUpdate, []);
  return (
    <div>
      <h1>all of your schedules</h1>
      {schedules.map((schedule) => (
        <div key={schedule.id}>
          <img src={schedule.plant.image_url} height="200" width="300" />
          <p>
            plant is {schedule.id} {schedule.plant.name} belongs to user{" "}
            {schedule.user.name}
          </p>
          <h3>started watering at {schedule.created_at}</h3>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{width: `${Math.round((schedule.growth_status / schedule.plant.growth_req) * 100)}%`}}
              aria-valuenow={`${Math.round((schedule.growth_status / schedule.plant.growth_req) * 100)}%`}
              aria-valuemin="0"
              aria-valuemax="100"
            >Growth Status: stage {schedule.growth_status} out of {schedule.plant.growth_req}</div>
          </div>
          <p>
            {schedule.plant.name} needs watered every{" "}
            {schedule.plant.days_to_water} days
          </p>
          <p>Last watered {schedule.time_changed} hours ago</p>
          <p>
            Needs watered in{" "}
            {schedule.plant.days_to_water * 24 - schedule.time_changed} hours
          </p>
          <p>
            {Math.round(
              (schedule.growth_status / schedule.plant.growth_req) * 100
            )}
          </p>
          <div>
            {schedule.plant.days_to_water * 24 - schedule.time_changed > 0 ? (
              <p className="waterless">come back later to water your plant!</p>
            ) : (
              <div>
                <button onClick={() => onWatered(schedule)}>water plant</button>
              </div>
            )}
          </div>
          <br></br>
          <button onClick={() => onDestroy(schedule)}>Destroy</button>
        </div>
      ))}
    </div>
  );
}
