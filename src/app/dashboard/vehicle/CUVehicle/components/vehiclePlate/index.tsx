"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";

function VehiclePlate() {
  const {
    vehicle: { PlateNumber, PlateRightLetter, PlateMiddleLetter, PlateLeftLetter },
  } = useSelector((state: any) => state.vehiclesSlice);

  const dispatch = useDispatch();
  const handleVehiclePlateNumberChange = (e: any) => {
    dispatch(setCUData({ PlateNumber: e.target.value }));
  };
  const handlePlateRightLetterChange = (e: any) => {
    dispatch(setCUData({ PlateRightLetter: e.target.value }));
  };
  const handlePlateMiddleLetterChange = (e: any) => {
    dispatch(setCUData({ PlateMiddleLetter: e.target.value }));
  };
  const handlePlateLeftLetterChange = (e: any) => {
    dispatch(setCUData({ PlateLeftLetter: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-2 items-end">
      <CustomLabel bold>Vehicle Plate</CustomLabel>
      <div className="  grid grid-cols-10 gap-2">
        <div className=" flex flex-col col-span-7  gap-1">
          <span className=" text-gray-600">Letter</span>
          <div className=" grid grid-cols-3 gap-2">
            <CustomInput value={PlateRightLetter}  style={{textAlign:"center"}} onChange={handlePlateRightLetterChange} maxLength={1} placeholder="Right" />
            <CustomInput value={PlateMiddleLetter}  style={{textAlign:"center"}} onChange={handlePlateMiddleLetterChange} maxLength={1} placeholder="Middle" />
            <CustomInput value={PlateLeftLetter}  style={{textAlign:"center"}} onChange={handlePlateLeftLetterChange} maxLength={1} placeholder="Left" />
          </div>
        </div>
        <div className=" flex flex-col  col-span-3 gap-1">
          <span className=" text-gray-600">Number</span>
          <CustomInput value={PlateNumber} style={{textAlign:"center"}} maxLength={4} onChange={handleVehiclePlateNumberChange} placeholder="Number" />
        </div>
      </div>
    </div>
  );
}

export default VehiclePlate;
