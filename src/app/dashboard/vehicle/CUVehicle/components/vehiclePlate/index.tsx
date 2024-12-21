"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { optionsVehiclePlateLetter } from "../options";

function VehiclePlate() {
  const { VehiclePlate } = useSelector((state: any) => state.vehiclesSlice?.vehicle || {});

  const dispatch = useDispatch();

  const handlePlateChange = (key: string, value: string) => {
    if (VehiclePlate) dispatch(setCUData({ VehiclePlate: { ...VehiclePlate, [key]: value }, }));

  };

  return (
    <div className="flex flex-col gap-2 items-end">
      <CustomLabel bold>Vehicle Plate</CustomLabel>
      <div className="grid grid-cols-10 gap-2">
        <div className="flex flex-col col-span-7 gap-1">
          <span className="text-gray-600 text-center">Letter</span>
          <div className="grid grid-cols-3 gap-2">

            <CustomSelector
              bgArrow={false}
              value={VehiclePlate?.RightLetter || ''}
              options={optionsVehiclePlateLetter}
              onChange={(e) => handlePlateChange('RightLetter', e)}
              placeholder={"Right"}
            />
            <CustomSelector
              bgArrow={false}
              value={VehiclePlate?.MiddleLetter || ''}
              options={optionsVehiclePlateLetter}
              onChange={(e) => handlePlateChange('MiddleLetter', e)}
              placeholder={"Middle"}
            />
            <CustomSelector
              bgArrow={false}
              value={VehiclePlate?.LeftLetter || ''}
              options={optionsVehiclePlateLetter}
              onChange={(e) => handlePlateChange('LeftLetter', e)}
              placeholder={"Left"}
            />
          </div>
        </div>

        <div className="flex flex-col col-span-3 gap-1">
          <span className="text-gray-600 text-center">Number</span>
          <CustomInput
            value={VehiclePlate?.Number || ''}
            style={{ textAlign: "center" }}
            maxLength={4}
            onChange={(e) => handlePlateChange('Number', e.target.value)}
            placeholder="Number"
          />
        </div>
      </div>
    </div>
  );
}

export default VehiclePlate;
