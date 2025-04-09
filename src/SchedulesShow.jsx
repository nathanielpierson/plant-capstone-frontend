export function SchedulesShow({ schedules }) {
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
          <p>
            needs watered in: {schedule.plant.days_to_water} plus current
            datetime minus {schedule.watering_start_date}
          </p>
        </div>
      ))}
    </div>
  );
}
