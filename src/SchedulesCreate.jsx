export function SchedulesCreate() {
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
      </form>
      {/* </form> */}
    </div>
  );
}

// want to add dropdown for plants later
