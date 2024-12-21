import * as Yup from 'yup';

const CompanyInfoSchema = Yup.object({
  Name: Yup.string()
    .min(1, "Name is required.")
    .max(100, "Name cannot exceed 100 characters."),

    IdentityNumber: Yup.string()
    .matches(/^(10|11)\d{8,9}$/, "Owner ID must start with 10 or 11 and be followed by 8 or 9 digits."),
  
  DateOfBirthHijri: Yup.string()
    .required("Date of birth (Hijri) is required."),

  PhoneNumber: Yup.string()
    .required("Phone number is required.")
    .matches(
      /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
      "Phone number must be in the format '+966' followed by 9 digits, or start with '05' followed by 8 digits, or start with '8' followed by 7 digits."
    ),

  EmailAddress: Yup.string()
    .email("Invalid email address."),

  Activity: Yup.string()
    .required("Activity is required."),
});

export const validateOwnerInfoData = async (data: Record<string, any>) => {
    try {
      await CompanyInfoSchema.validate(data, { abortEarly: false });
      return { valid: true, errors: null };
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        return { valid: false, errors: error.errors };
      }
      throw error;
    }
  };
  
