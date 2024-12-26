import * as Yup from 'yup';

const CompanyInfoSchema = Yup.object({
    Name: Yup.string()
        .min(1, "Name required.")
        .max(100, "Max 100 chars."),
        
    IdentityNumber: Yup.string()
        .matches(/^(70)\d{8,9}$/, "ID must start with 70 and be 8-9 digits."),
    
    CommercialRecordNumber: Yup.string()
        .required("Record number required."),
    
    CommercialRecordIssueDateHijri: Yup.string()
        .required("Issue date required.")
        .matches(/^\d{4}-\d{2}-\d{2}$/, "Use format YYYY-MM-DD."),
    
    // ExtensionNumber: Yup.string()
    //     .optional()
    //     .matches(/^\d*$/, "Extension must be numeric."),
    
    EmailAddress: Yup.string()
        .required("Email required.")
        .email("Invalid email."),
    
    ManagerName: Yup.string()
        .required("Manager name required."),
    
    PhoneNumber: Yup.string()
        .required("Phone required.")
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Invalid phone format."
        ),
    
    ManagerPhoneNumber: Yup.string()
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Invalid manager phone."
        ),
    
    ManagerMobileNumber: Yup.string()
        .matches(
            /^(?:\+966\d{9}|05\d{8}|8\d{7})$/,
            "Invalid mobile number."
        ),
    
    Activity: Yup.string()
        .required("Activity required."),
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
