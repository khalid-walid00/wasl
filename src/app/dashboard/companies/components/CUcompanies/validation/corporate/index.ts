import * as Yup from 'yup';

export const CompanyInfoSchema = Yup.object({
    Name: Yup.string()
        .min(1, "Name is required.")
        .max(100, "Max 100 characters."),
        
    IdentityNumber: Yup.string()
        .matches(/^(70)\d{8,9}$/, "ID must start with 70 and be 8-9 digits."),
    
    CommercialRecordNumber: Yup.string()
        .required("Record number is required."),
    
    CommercialRecordIssueDateHijri: Yup.string()
        .required("Issue date is required.")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Format must be YYYY-MM-DD."),
    
    EmailAddress: Yup.string()
        .required("Email is required.")
        .email("Invalid email format."),
    
    ManagerName: Yup.string()
        .required("Manager name is required."),
    
    PhoneNumber: Yup.string()
        .required("Phone number is required.")
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Phone must start with '+966' (9 digits), '05' (8 digits), or '8' (7 digits)."
        ),
    
    ManagerPhoneNumber: Yup.string()
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Invalid manager phone number."
        ),
    
    ManagerMobileNumber: Yup.string()
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Invalid mobile number."
        ),
    
    Activity: Yup.string()
        .required("Activity is required."),
});

export const validateCompanyData = async (data: Record<string, any>) => {
    let errorsArray: { field: string; message: string }[] = [];

    try {
        await CompanyInfoSchema.validate(data, { abortEarly: false });
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
