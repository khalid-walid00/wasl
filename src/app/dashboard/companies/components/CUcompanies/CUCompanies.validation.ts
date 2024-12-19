import * as Yup from 'yup';

const companySchema = Yup.object({
  Name: Yup.string()
    .required("Company name is required."),

  IdentityNumber: Yup.string()
    .matches(/^(10|70)\d{8}$/, "Identity number must start with '10' or '70' and contain 10 digits.")
    .length(10, "Identity number must be exactly 10 digits.")
    .required("Identity number is required."),
  PhoneNumber: Yup.string()
    .required("Phone number is required.")
    .matches(
      /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
      "Phone number must be in the format '+966' followed by 9 digits, or start with '05' followed by 8 digits, or start with '8' followed by 7 digits."
    ),

  EmailAddress: Yup.string()
    .email("Email address is invalid.")
    .required("Email address is required."),

  Activity: Yup.string()
    .required("Company activity is required."),

  // UplevelOperationCompanyId: Yup.string()
  //   .required("Uplevel operation company ID is required."),
});

export const validateCompanyData = async (data: Record<string, any>) => {
  try {
    await companySchema.validate(data, { abortEarly: false });
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

