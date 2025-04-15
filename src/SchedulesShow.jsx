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
          <h4>
            {schedule.user.name}'s {schedule.plant.name}
          </h4>
          <p>planted on {new Date(schedule.created_at).toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})}
</p>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
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
          <p>Last watered {schedule.time_changed} {schedule.time_changed > 1 ? "hours" : "hour"} ago</p>
          <p>
            Needs watered in{" "}
            {schedule.plant.days_to_water * 24 - schedule.time_changed} hours
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
