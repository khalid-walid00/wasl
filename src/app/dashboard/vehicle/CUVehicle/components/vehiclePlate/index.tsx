"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { optionsVehiclePlateLetter } from "../options";
import { BsExclamationOctagon } from "react-icons/bs";
import React from "react";

function VehiclePlate() {
  const { VehiclePlate, errors } = useSelector((state: any) => state.vehiclesSlice?.vehicle || {});

  const dispatch = useDispatch();

  const handlePlateChange = (key: string, value: string) => {
    if (VehiclePlate) dispatch(setCUData({ VehiclePlate: { ...VehiclePlate, [key]: value } }));
  };

  const errorNumber = errors?.find((err: { field: string }) => err.field === "VehiclePlate.Number");
  const errorRightLetter = errors?.find((err: { field: string }) => err.field === "VehiclePlate.RightLetter");
  const errorMiddleLetter = errors?.find((err: { field: string }) => err.field === "VehiclePlate.MiddleLetter");
  const errorLeftLetter = errors?.find((err: { field: string }) => err.field === "VehiclePlate.LeftLetter");

  return (
    <div className="relative flex flex-col gap-2">
      <CustomLabel bold>Vehicle Plate</CustomLabel>

      <div className="grid grid-cols-10 gap-2">

      <div className="flex flex-col col-span-3 gap-1">
          <span className="text-gray-600 text-center">Number</span>
          <div className="relative flex items-center">
            <CustomInput
              value={VehiclePlate?.Number || ''}
              style={{ textAlign: "center" }}
              maxLength={4}
              onChange={(e) => handlePlateChange('Number', e.target.value)}
              placeholder="Number"
              className={`w-full border ${errorNumber && 'border-red-500 pr-10'}`}
            />
            {errorNumber && (
              <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
            )}
          </div>

          <div
            className={`absolute text-red-500 left-0 top-full transition-all duration-300 ${
              errorNumber ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
          >
            {errorNumber?.message}
          </div>
        </div>
        {/* Letters Section */}
        
        <div className="flex flex-col col-span-7 gap-1">
          <span className="text-gray-600 text-center">Letter</span>
          <div className="grid grid-cols-3 gap-2">
  {/* Left Letter */}
  <div className="relative flex items-center">
              <CustomSelector
                bgArrow={false}
                value={VehiclePlate?.LeftLetter || ''}
                options={optionsVehiclePlateLetter}
                onChange={(e) => handlePlateChange('LeftLetter', e)}
                placeholder="Left"
                className={`w-full border ${errorLeftLetter && 'border-red-500 pr-10'}`}
              />
              {errorLeftLetter && (
                <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              )}
            </div>
               {/* Middle Letter */}
               <div className="relative flex items-center">
              <CustomSelector
                bgArrow={false}
                value={VehiclePlate?.MiddleLetter || ''}
                options={optionsVehiclePlateLetter}
                onChange={(e) => handlePlateChange('MiddleLetter', e)}
                placeholder="Middle"
                className={`w-full border ${errorMiddleLetter && 'border-red-500 pr-10'}`}
              />
              {errorMiddleLetter && (
                <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              )}
            </div>

            {/* Right Letter */}
            <div className="relative flex items-center">
              <CustomSelector
                bgArrow={false}
                value={VehiclePlate?.RightLetter || ''}
                options={optionsVehiclePlateLetter}
                onChange={(e) => handlePlateChange('RightLetter', e)}
                placeholder="Right"
                className={`w-full border ${errorRightLetter && 'border-red-500 pr-10'}`}
              />
              {errorRightLetter && (
                <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2" />
              )}
            </div>

         

          
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default VehiclePlate;
