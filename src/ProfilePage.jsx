import { PlantCount } from "./PlantCount"
import { AddPicture } from "./AddPicture";


export function ProfilePage() {
  var image = null;
  function request(formData) {
    var image = formData.get("image");
    console.log(image);
  }
  return (
    <div>
      <form action={request}>
        <input name="image" />
        <button type="submit">submit</button>
      </form>
    <div>
        ADD PROFILE PIC
        <PlantCount />
        {image != null ? <div><AddPicture image={image}/></div> : <div></div>}
        
    </div>
    </div>
  )
}