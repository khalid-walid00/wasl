"use client";
import { useDispatch, useSelector } from "react-redux";
import CustomLabel from "~/common/components/atoms/label";
import CustomInput from "~/common/components/atoms/input";
import { clearFeiledErrors, completeFormData, setCUData } from "~/app/dashboard/vehicle/vehicle.slice";
import { validateField } from "~/utils/validation";
import { vehicleRegisterSchema } from "../../validations";
import { BsExclamationOctagon } from "react-icons/bs";

function SequenceNumber() {
  const {
    vehicle:{SequenceNumber},errors
  } = useSelector((state: any) => state.vehiclesSlice);
 console.log("errors", errors);
  const dispatch = useDispatch();
  const error = errors?.find((err: { field: string }) => err.field === "SequenceNumber");
  const handleSequenceNumberChange = async (e: any) => {
    const value = e.target.value;
    dispatch(setCUData({ SequenceNumber:value }));
    dispatch(completeFormData(value));
    const isValid = await validateField(vehicleRegisterSchema, "SequenceNumber", value);
    if (isValid) {
      dispatch(clearFeiledErrors("SequenceNumber"));
    }
  };

  return (
    <div className="relative flex flex-col justify-between">
    <CustomLabel bold>Sequence Number</CustomLabel>
    <div className="relative flex items-center">
    <CustomInput value={SequenceNumber} onChange={handleSequenceNumberChange} placeholder="Enter Sequence Number" />
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

export default SequenceNumber;
