"use client";
import React from "react";
import CustomInput from "~/common/components/atoms/input";
import "react-datepicker/dist/react-datepicker.css";
import SideAction from "~/common/components/molecules/sideActions";
import { useDispatch, useSelector } from "react-redux";
import { clearVehicle } from "./createVehicle.slice";
import CustomLabel from "~/common/components/atoms/label";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";

function CreateVehicle() {
  const dispatch = useDispatch();
  const { showModel, loading } = useSelector(
    (state:any) => state.createVehicleSlice
  );

  const toggleModelHandler = () => {
    dispatch(clearVehicle());
  };

  const optionsData = {
    vehicleStatus: [
      { label: "Active", value: "active" },
      { label: "Pending", value: "pending" },
      { label: "Canceled", value: "canceled" },
      { label: "Rejected", value: "rejected" },
    ],
    carModel: [
      { label: "BMW", value: "bmw" },
      { label: "Mercedes", value: "mercedes" },
      { label: "Audi", value: "audi" },
      { label: "Tesla", value: "tesla" },
    ],
    vehicleType: [
      { label: "Car", value: "car" },
      { label: "Motorcycle", value: "motorcycle" },
      { label: "Truck", value: "truck" },
      { label: "Bus", value: "bus" },
      { label: "Electric Car", value: "electric_car" },
      { label: "Sports Car", value: "sports_car" },
    ],
    fuelType: [
      { label: "Petrol", value: "petrol" },
      { label: "Diesel", value: "diesel" },
      { label: "Natural Gas", value: "natural_gas" },
      { label: "Electric", value: "electric" },
    ],
    gearBoxType: [
      { label: "Manual", value: "manual" },
      { label: "Automatic", value: "automatic" },
    ],
  };

  return (
    <SideAction
      handleAction={() => {}}
      isLoading={false}
      showModel={showModel}
      loadingScreen={false}
      toggleModelHandler={toggleModelHandler}
    >
      <div className="flex flex-col gap-y-4 min-h-screen">
        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>Vehicle Name</CustomLabel>
          <CustomInput placeholder="Enter vehicle name" />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>Vehicle Type</CustomLabel>
          <CustomSelector
            options={optionsData.vehicleType}
            onChange={() => {}}
            value={null}
            placeholder="Select type"
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>Vehicle Status</CustomLabel>
          <CustomSelector
            options={optionsData.vehicleStatus}
            onChange={() => {}}
            value={null}
            placeholder="Select status"
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>Vehicle Model</CustomLabel>
          <CustomSelector
            options={optionsData.carModel}
            onChange={() => {}}
            value={null}
            placeholder="Select model"
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>Fuel Type</CustomLabel>
          <CustomSelector
            options={optionsData.fuelType}
            onChange={() => {}}
            value={null}
            placeholder="Select fuel type"
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>Gearbox Type</CustomLabel>
          <CustomSelector
            options={optionsData.gearBoxType}
            onChange={() => {}}
            value={null}
            placeholder="Select gearbox type"
          />
        </div>
      </div>
    </SideAction>
  );
}

export default CreateVehicle;
