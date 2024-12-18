"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";

function VehiclePlate() {
  const {vehicle: {VehiclePlate},} = useSelector((state: any) => state.vehiclesSlice); 

  const dispatch = useDispatch();

  const handleVehiclePlateNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCUData({ VehiclePlate: {...VehiclePlate, Number: e.target.value } }));
  };

  const handlePlateRightLetterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCUData({ VehiclePlate: {...VehiclePlate, RightLetter: e.target.value } }));
  };

  const handlePlateMiddleLetterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCUData({ VehiclePlate: { ...VehiclePlate, MiddleLetter: e.target.value } }));
  };

  const handlePlateLeftLetterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setCUData({ VehiclePlate: {...VehiclePlate, LeftLetter: e.target.value } }));
  };

  return (
    <div className="flex flex-col gap-2 items-end">
      <CustomLabel bold>Vehicle Plate</CustomLabel>
      <div className="grid grid-cols-10 gap-2">
        <div className="flex flex-col col-span-7 gap-1">
          <span className="text-gray-600 text-center">Letter</span>
          <div className="grid grid-cols-3 gap-2">
            <CustomInput
              value={VehiclePlate?.RightLetter}
              style={{ textAlign: "center" }}
              onChange={handlePlateRightLetterChange}
              maxLength={1}
              placeholder="Right"
            />
            <CustomInput
              value={VehiclePlate?.MiddleLetter}
              style={{ textAlign: "center" }}
              onChange={handlePlateMiddleLetterChange}
              maxLength={1}
              placeholder="Middle"
            />
            <CustomInput
              value={VehiclePlate?.LeftLetter}
              style={{ textAlign: "center" }}
              onChange={handlePlateLeftLetterChange}
              maxLength={1}
              placeholder="Left"
            />
          </div>
        </div>
        <div className="flex flex-col col-span-3 gap-1">
          <span className="text-gray-600 text-center">Number</span>
          <CustomInput
            value={VehiclePlate?.Number}
            style={{ textAlign: "center" }}
            maxLength={4}
            onChange={handleVehiclePlateNumberChange}
            placeholder="Number"
          />
        </div>
      </div>
    </div>
  );
}

export default VehiclePlate;
