export function SchedulesIndex({ schedules }) {
  return (
    <div>
      <h1>all schedules</h1>
      {schedules.map((schedule) => (
        <div key={schedule.id}>
          <img src={schedule.plant.image_url} className="hover-opacity" height="200" width="300" />
          <p>
            plant is {schedule.plant.name} belongs to user {schedule.user.name}
          </p>
        </div>
      ))}
    </div>
  );
}
