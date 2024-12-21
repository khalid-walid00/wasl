import * as Yup from 'yup';

const CompanyInfoSchema = Yup.object({
    Name: Yup.string()
        .min(1, "Name is required.")
        .max(100, "Name cannot exceed 100 characters."),
    IdentityNumber: Yup.string()
        .matches(/^(70)\d{8,9}$/, "Company ID must start with 10 or 11 and be followed by 8 or 9 digits."),

    CommercialRecordNumber: Yup.string()
        .required("Commercial record number is required."),

    CommercialRecordIssueDateHijri: Yup.string()
        .required("Commercial record issue date (Hijri) is required.")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Commercial record issue date (Hijri) must be in the format YYYY-MM-DD."),


    ExtensionNumber: Yup.string()
        .optional()
        .matches(/^\d*$/, "Extension number must be numeric."),

        EmailAddress: Yup.string()
        .required("Email address is required.")
        .email("Invalid email address."),

    ManagerName: Yup.string()
        .required("Manager name is required."),

    PhoneNumber: Yup.string()
        .required("Phone number is required.")
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Phone number must be in the format '+966' followed by 9 digits, or start with '05' followed by 8 digits, or start with '8' followed by 7 digits."
        ),

    ManagerPhoneNumber: Yup.string()
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Manager's phone number must be in the format '+966' followed by 9 digits, or start with '05' followed by 8 digits, or start with '8' followed by 7 digits."
        ),

    ManagerMobileNumber: Yup.string()
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Manager's mobile number must be in the format '+966' followed by 9 digits, or start with '05' followed by 8 digits, or start with '8' followed by 7 digits."
        ),

    Activity: Yup.string()
        .required("Activity is required."),


});

export const validateCompanyData = async (data: Record<string, any>) => {
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
