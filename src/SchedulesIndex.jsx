export function SchedulesIndex({ schedules }) {
  return (
    <div>
      <h1>all schedules</h1>
      {schedules.map((schedule) => (
        <div key={schedule.id}>
          <p>belongs to user {schedule.user_id}</p>
        </div>
      ))}
    </div>
  );
}
