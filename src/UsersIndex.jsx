export function UsersIndex({ users }) {
  return (
    <div>
      <h1>All of our satisfied Plant App users ({users.length} total)</h1>
      {users.map((user) => (
        <div key={user.id}>
          <img 
            src={user.image_url || "/images/default-plant-man.png"} 
            height={200} 
            width={220}
            alt={`${user.name}'s profile`}
            onError={(e) => {
              e.target.src = "/images/default-plant-man.png";
            }}
          />
          <h2>my name {user.name}</h2>
          {/* {users.schedules.map((schedule) => (
            <div key={schedule.id}>
              <p>{schedule.watering_start_date}</p>
            </div>
          ))} */}
        </div>
      ))}
    </div>
  );
}
