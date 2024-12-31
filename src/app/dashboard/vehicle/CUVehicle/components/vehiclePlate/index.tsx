"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { clearFeiledErrors, setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { optionsVehiclePlateLetter } from "../options";
import { BsExclamationOctagon } from "react-icons/bs";
import React from "react";
import { validateField } from "~/utils/validation";
import { vehicleRegisterSchema } from "../../validations";

function VehiclePlate() {
  const { vehicle: { VehiclePlate }, errors } = useSelector((state: any) => state.vehiclesSlice);
  const dispatch = useDispatch();

  const handlePlateChange = async (key: string, value: string) => {
    if (VehiclePlate) dispatch(setCUData({ VehiclePlate: { ...VehiclePlate, [key]: value } }));
    const isValid = await validateField(vehicleRegisterSchema, `VehiclePlate.${key}`, value);
    if (isValid) {
      dispatch(clearFeiledErrors(`VehiclePlate.${key}`));
    }
  };

  const errorNumber = errors?.find((err: { field: string }) => err.field === "VehiclePlate.Number");
  const errorRightLetter = errors?.find((err: { field: string }) => err.field === "VehiclePlate.RightLetter");
  const errorMiddleLetter = errors?.find((err: { field: string }) => err.field === "VehiclePlate.MiddleLetter");
  const errorLeftLetter = errors?.find((err: { field: string }) => err.field === "VehiclePlate.LeftLetter");

  return (
    <div className="relative flex flex-col gap-2">
      <CustomLabel bold>Vehicle Plate</CustomLabel>
      <div className="relative flex  gap-4">

        {/* Number Section */}
        <div className="flex flex-col gap-1 w-1/3">
          <span className="text-gray-600 text-center">Number</span>
          <div className="relative flex items-center">
            <CustomInput
              value={VehiclePlate?.Number || ''}
              style={{ textAlign: "center" }}
              maxLength={4}
              onChange={(e) => handlePlateChange('Number', e.target.value)}
              placeholder="Number"
              className={`w-[180px] border ${errorNumber && 'border-red-500 pr-10'}`}
            />
            {errorNumber && (
              <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
            )}
          </div>
          <div className=" h-5">

          {errorNumber && <div className="text-red-500 text-sm block w-[180px]  text-wrap ">{errorNumber.message}</div>}
          </div>
        </div>

        {/* Letters Section */}
        <div className="flex flex-col gap-1 w-2/3">
          <span className="text-gray-600 text-center">Letters</span>
          <div className=" grid grid-cols-3 gap-2">

            {/* Left Letter */}
            <div className="flex flex-col flex-1">
              <div className=" w-[120px]">
              <CustomSelector
                bgArrow={false}
                value={VehiclePlate?.LeftLetter || ''}
                options={optionsVehiclePlateLetter}
                onChange={(e) => handlePlateChange('LeftLetter', e)}
                placeholder="Left"
                className={`w-full border ${errorLeftLetter && 'border-red-500'}`}
                />
                </div>
              {errorLeftLetter && <div className="text-red-500 text-sm block truncate">{errorLeftLetter.message}</div>}
            </div>

            {/* Middle Letter */}
            <div className="flex flex-col flex-1">
              <div className=" w-[120px]">
              <CustomSelector
                bgArrow={false}
                value={VehiclePlate?.MiddleLetter || ''}
                options={optionsVehiclePlateLetter}
                onChange={(e) => handlePlateChange('MiddleLetter', e)}
                placeholder="Middle"
                className={`w-full border ${errorMiddleLetter && 'border-red-500'}`}
              />
            </div>
              {errorMiddleLetter && <div className="text-red-500 text-sm block truncate">{errorMiddleLetter.message}</div>}
            </div>

            {/* Right Letter */}
            <div className="flex flex-col flex-1">
            <div className=" w-[120px]">

              <CustomSelector
                bgArrow={false}
                value={VehiclePlate?.RightLetter || ''}
                options={optionsVehiclePlateLetter}
                onChange={(e) => handlePlateChange('RightLetter', e)}
                placeholder="Right"
                className={`w-full border ${errorRightLetter && 'border-red-500'}`}
              />
            </div>
              {errorRightLetter && <div className="text-red-500 text-sm block truncate">{errorRightLetter.message}</div>}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default VehiclePlate;
