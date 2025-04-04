export function UsersNew(onCreate) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input name="name" type="text" />
      </div>
      <div>
        email: <input email="email" type="text" />
      </div>
      password: <input password="password" type="text" />
      <div>
        add profile picture: <input image_url="image_url" type="text" />
      </div>
    </form>
  );
}
