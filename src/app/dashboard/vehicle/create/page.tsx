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
    (state: any) => state.createVehicleSlice
  );

  const toggleModelHandler = () => {
    dispatch(clearVehicle());
  };

  const optionsData = {
    vehicleStatus: [
      { label: "نشط", value: "active" },
      { label: "معلق", value: "pending" },
      { label: "ملغي", value: "canceled" },
      { label: "مهمل", value: "rejected" },
    ],
    carModel: [
      { label: "BMW", value: "bmw" },
      { label: "Mercedes", value: "mercedes" },
      { label: "Audi", value: "audi" },
      { label: "Tesla", value: "tesla" },
    ],
    vehicleType: [
        { label: "سيارة", value: "car" },
        { label: "دراجة نارية", value: "motorcycle" },
        { label: "شاحنة", value: "truck"},
        { label: "حافلة", value: "bus" },
        { label: "سيارة كهربائية", value: "electric_car" },
        { label: "سيارة رياضية", value: "sports_car" }
       ],
    fuelType: [
      { label: "بنزين", value: "petrol" },
      { label: "ديزل", value: "diesel" },
      { label: "غاز طبيعي", value: "natural_gas" },
      { label: "كهرباء", value: "electric" },
    ],
    gearBoxType: [
      { label: "يدوي", value: "manual" },
      { label: "أوتوماتيك", value: "automatic" },
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
          <CustomLabel bold>اسم المركبة</CustomLabel>
          <CustomInput placeholder="اسم المركبة" />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>نوع المركبة</CustomLabel>
          <CustomSelector
            options={optionsData.vehicleType}
            onChange={() => {}}
            value={null}
            placeholder="حدد النوع"
          />
        </div>
        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>حالة المركبة</CustomLabel>
          <CustomSelector
            options={optionsData.vehicleType}
            onChange={() => {}}
            value={null}
            placeholder="حدد حالة المركبة"
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>الموديل المركبة</CustomLabel>
          <CustomSelector
            options={optionsData.carModel}
            onChange={() => {}}
            value={null}
            placeholder="حدد الموديل"
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>نوع البنزين</CustomLabel>
          <CustomSelector
            options={optionsData.fuelType}
            onChange={() => {}}
            value={null}
            placeholder="حدد نوع البنزين"
          />
        </div>

        <div className="flex flex-col gap-2 items-start">
          <CustomLabel bold>صندوق التروس</CustomLabel>
          <CustomSelector
            options={optionsData.gearBoxType}
            onChange={() => {}}
            value={null}
            placeholder="حدد نوع صندوق التروس"
          />
        </div>
      </div>
    </SideAction>
  );
}

export default CreateVehicle;
