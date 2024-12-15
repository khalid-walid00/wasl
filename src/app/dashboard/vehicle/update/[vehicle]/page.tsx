import CUVehicleComponent from "../../CUVehicle/index";


function UpdateVehicle({ params:{vehicle} }: any) {
    console.log("vehicleod",vehicle);
    return (
       
        <CUVehicleComponent _id={vehicle} />
    );
}

export default UpdateVehicle;