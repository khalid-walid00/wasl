import * as Yup from 'yup';
export const OwnerInfoSchema = Yup.object({
  Name: Yup.string()
    .min(1, "Name required.")
    .max(100, "Max 100 chars."),

  IdentityNumber: Yup.string()
    .matches(/^(10|11)\d{8,9}$/, "ID must start with 10 or 11, followed by 8-9 digits."),
  
  DateOfBirthHijri: Yup.string()
    .required("Hijri DOB required."),

  PhoneNumber: Yup.string()
    .required("Phone required.")
    .matches(
      /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
      "Invalid phone format."
    ),

  EmailAddress: Yup.string()
    .required("Email required.")
    .email("Invalid email."),

  Activity: Yup.string()
    .required("Activity required."),
});

export const validateOwnerInfoData = async (data: Record<string, any>) => {
  let errorsArray: { field: string; message: string }[] = [];

  try {
    await OwnerInfoSchema.validate(data, { abortEarly: false });
    return { valid: true, errors: null };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      errorsArray = error.inner.map((err) => ({
        field: err.path || "Unknown",
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
