"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import { setCUData, clearFeiledErrors, completeFormData } from "~/app/dashboard/vehicle/vehicle.slice";
import CustomSelector from "~/common/components/atoms/customSelector/CustomSelector";
import { BsExclamationOctagon } from "react-icons/bs";
import React, { useEffect } from "react";
import { fetchCompany } from "~/app/appSlice";
import { validateField } from "~/utils/validation";
import { vehicleRegisterSchema } from "../../validations";

function OperationCompanyId() {
  const { vehicle: { OperationCompanyId }, errors } = useSelector((state: any) => state.vehiclesSlice);
  const { company: optionsCompany, companyLoading } = useSelector((state: any) => state.config);

  const dispatch = useDispatch();
  const error = errors?.find((err: { field: string }) => err.field === "OperationCompanyId");

  const handleOperationCompanyIdChange = async (e: any) => {
    dispatch(setCUData({ OperationCompanyId: e }));
    dispatch(completeFormData(e));

    const isValid = await validateField(vehicleRegisterSchema, "OperationCompanyId", e);
    if (isValid) {
      dispatch(clearFeiledErrors("OperationCompanyId"));
    }
  };

  useEffect(() => {
    dispatch(fetchCompany());
  }, [dispatch]);

  return (
    <div className="relative flex flex-col gap-2">
      <CustomLabel bold>Operation Company</CustomLabel>

      <div className="relative flex items-center">
        <CustomSelector
          options={optionsCompany}
          onChange={handleOperationCompanyIdChange}
          value={OperationCompanyId}
          isLoading={companyLoading}
          placeholder="Select Operation Company"
          className={`w-full border ${error && 'border-red-500 pr-10'}`}
        />
        {error && (
          <BsExclamationOctagon className="text-red-500 absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer" />
        )}
      </div>

      <div
        className={`absolute text-red-500 left-0 top-full transition-all duration-300 ${
          error ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        {error?.message}
      </div>
    </div>
  );
}

export default OperationCompanyId;
