import axios from "axios";

export function SchedulesShow({ schedules, onUpdate, onDestroy }) {
  return (
    <div>
      <h1>all schedules</h1>
      {schedules.map((schedule) => (
        <div key={schedule.id}>
          <img src={schedule.plant.image_url} height="200" width="300" />
          <p>
            plant is {schedule.plant.name} belongs to user {schedule.user.name}
          </p>
          <p>
            {schedule.plant.name} needs watered every{" "}
            {schedule.plant.days_to_water} days
          </p>
          <p>Last watered {schedule.time_changed} hours ago</p>
          <p>
            Needs watered in{" "}
            {schedule.plant.days_to_water * 24 - schedule.time_changed} hours
          </p>
          <button onClick={() => onUpdate(schedule)}>water plant</button>
          <br></br>
          <button onClick={() => onDestroy(schedule)}>Destroy</button>
        </div>
      ))}
    </div>
  );
}
