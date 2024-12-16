import * as Yup from 'yup';
const vehicleRegisterSchema = Yup.object({
  SequenceNumber: Yup.string()
    .required("Sequence number is mandatory.")
    .min(4, "Sequence number must be between 4 and 9 digits.")
    .max(9, "Sequence number must be between 4 and 9 digits."),

  PlateType: Yup.string()
    .required("Plate type is mandatory."),

  IMEINumber: Yup.string()
    .required("IMEI number is mandatory.")
    .matches(/^\d{14,}$/, "IMEI number must be at least 14 digits."),

  Activity: Yup.string()
    .required("Activity is mandatory."),

  OperationCompanyId: Yup.string()
    .required("Operation company ID is mandatory."),

  VehiclePlate: Yup.object({
    Number: Yup.string()
      .required("Plate number is mandatory."),

    RightLetter: Yup.string()
      .required("Right/Middle/Left letter is mandatory.")
      .matches(/^[A-Z]$/, "Right letter must be a single uppercase letter."),

    MiddleLetter: Yup.string()
      .required("Right/Middle/Left letter is mandatory.")
      .matches(/^[A-Z]$/, "Middle letter must be a single uppercase letter."),

    LeftLetter: Yup.string()
      .required("Right/Middle/Left letter is mandatory.")
      .matches(/^[A-Z]$/, "Left letter must be a single uppercase letter."),
  }),
});

export const validateVehicleData = async (data: Record<string, any>) => {
  try {
    await vehicleRegisterSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: null };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      return {
        valid: false,
        errors: error.errors,
      };
    }
    throw error;
  }
};
