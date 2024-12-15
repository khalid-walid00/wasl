import * as Yup from "yup";

const vehicleSchema = Yup.object({
  // Account: Yup.number()
  //   .typeError("Account number must be a number.")
  //   .required("Account number is required."),

  // VehicleNo: Yup.string()
  //   .required("Vehicle number is required.")
  //   .min(3, "Vehicle number must be at least 3 characters long."),

  SequenceNumber: Yup.string()
    .required("Sequence number is required.")
    .matches(/^\d+$/, "Sequence number must only contain numbers."),

  PlateNumber: Yup.string()
    .required("Plate number is required.")
    .matches(/^\d+$/, "Sequence number must only contain numbers."),

  PlateRightLetter: Yup.string()
    .length(1, "The right plate letter must be a single character.")
    .required("The right plate letter is required."),

  PlateMiddleLetter: Yup.string()
    .length(1, "The middle plate letter must be a single character.")
    .required("The middle plate letter is required."),

  PlateLeftLetter: Yup.string()
    .length(1, "The left plate letter must be a single character.")
    .required("The left plate letter is required."),

  PlateType: Yup.string()
  .length(1, "The Plate Type must be a single character.")
  .matches(/^\d+$/, "Plate Type number must only contain numbers."),

  IMEINumber: Yup.string()
    .required("IMEI number is required.")
    .matches(/^\d{14,}$/, "IMEI number must only contain numbers."),
    
    Activity: Yup.string()
      .required("Activity status is required.")
      .oneOf(["Active", "Inactive"], "Activity status must be either 'Active' or 'Inactive'."),
  // WASLVehicleKey: Yup.string()
  //   .required("WASL vehicle key is required.")
  //   .min(5, "WASL vehicle key must be at least 5 characters long."),

  // Response: Yup.string()
  //   .required("Response is required.")
  //   .oneOf(["Approved", "Pending", "Rejected"], "Response must be one of 'Approved', 'Pending', or 'Rejected'."),

  // RegistrationDate: Yup.string()
  //   .required("Registration date is required.")
  //   .matches(/^\d{4}-\d{2}-\d{2}$/, "Registration date must be in the format yyyy-mm-dd."),


  // Reply: Yup.string()
  //   .required("Reply is required.")
  //   .min(3, "Reply must be at least 3 characters long."),
});

export const validateVehicleData = async (data: Record<string, any>) => {
  try {
    console.log("validateVehicleData", data);
    await vehicleSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: null };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errorMessages = error.errors.join(" | ");
      return {
        valid: false,
        errors: errorMessages,
      };
    }
    throw error;
  }
};
