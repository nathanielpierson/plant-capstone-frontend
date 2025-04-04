export function UsersIndex({ users }) {
  console.log(users);

return (
  <div>
          <h1>All of our satisfied Plant App users ({users.length} total)</h1>
       {users.map((user) => (
          <div key={user.id}>
          <img src={user.image_url} height={200} width={220} />
          <h2>{user.name}</h2>
         </div>
       ))}
  </div>
)
}