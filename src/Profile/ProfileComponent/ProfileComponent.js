import DataComponent from "./DataComponent";
import image from "./image.jpg";

function ProfileComponent() {
    let fullName="Habib Hajjem";
    let bio= "Football lover";
    let profession="engineer";
    const handleName =e =>{
        alert(fullName);
    };
    return ( 
    <div>
        <DataComponent  fullName={fullName} bio={bio} profession={profession} handleName={handleName}> 
        <img src={image} alt="profile pic" style={{display:"block",margin:"auto"}} />
         </DataComponent>
    </div>
     );
}


export default ProfileComponent ;
