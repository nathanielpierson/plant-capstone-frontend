export function SchedulesCreate() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  return (
    <div>
      <p>create a new plant schedule here!</p>
      <form>
        {/* <form onSubmit={handleSubmit}> */}
        <div>
          User: <input user="user" type="text" />
        </div>
        <div>
          plant_id: <input plant_id="plant_id" type="integer" />
        </div>
        <div>
          <select>
            <option>Palm Tree</option>
            <option>Rhubarb</option>
          </select>
        </div>
      </form>
      {/* </form> */}
    </div>
  );
}

// want to add dropdown for plants later
