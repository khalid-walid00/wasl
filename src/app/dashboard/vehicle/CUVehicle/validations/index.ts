import * as Yup from 'yup';
export const vehicleRegisterSchema = Yup.object({
  SequenceNumber: Yup.string()
    .required("Sequence number is mandatory.")
    .min(4, "Sequence number must be between 4 and 9 digits.")
    .max(9, "Sequence number must be between 4 and 9 digits."),

  PlateType: Yup.string()
    .required("Plate type is mandatory."),

    ImeiNumber: Yup.string()
    .required("IMEI number is mandatory.")
    .matches(/^\d{14,}$/, "IMEI number must be at least 14 digits."),

  Activity: Yup.string()
    .required("Activity is mandatory."),

  OperationCompanyId: Yup.string()
    .required("Operation company ID is mandatory."),

    VehiclePlate: Yup.object({
    Number: Yup.string()
      .required("Plate number required.")
      .min(1, "Plate number must be at least 1 characters.")
      .max(4, "Plate number must be at most 4 characters."),
    RightLetter: Yup.string()
      .required("Right letter required."),

    MiddleLetter: Yup.string()
      .required("Middle letter required."),
    LeftLetter: Yup.string()
      .required("Left letter required.")

  }),
});

export const validateVehicleInfoData = async (data: Record<string, any>) => {
    let errorsArray: { field: string; message: string }[] = [];
  
    try {
      await vehicleRegisterSchema.validate(data, { abortEarly: false });
      return { valid: true, errors: null };
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        errorsArray = error.inner.map((err) => ({
          field: err.path || "Unknown Field",
          message: err.message,
        }));
  
        return {
          valid: false,
          errors: errorsArray,
        };
      }
      throw error;
    }
  };
  