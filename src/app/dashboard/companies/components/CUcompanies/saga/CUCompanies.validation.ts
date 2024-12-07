import { z } from 'zod';

const CompanyInfoSchema = z.object({
  Name: z.string()
    .min(1, { message: "Name is required." })
    .max(100, { message: "Name cannot exceed 100 characters." }),

  IdentityNumber: z.string()
    .regex(/^\d{10}$/, { message: "Identity number must be exactly 10 digits." }),

  CommercialRecordNumber: z.string()
    .nonempty({ message: "Commercial record number is required." }),

  CommercialRecordIssueDateHijri: z.string()
    .nonempty({ message: "Commercial record issue date (Hijri) is required." }),

  DateOfBirthHijri: z.string()
    .nonempty({ message: "Date of birth (Hijri) is required." }),

  DateOfBirthGregorian: z.string()
    .nonempty({ message: "Date of birth (Gregorian) is required." }),

  PhoneNumber: z.string()
    .regex(/^\+?\d{9,15}$/, { message: "Phone number must be between 9 and 15 digits." }),

  ExtensionNumber: z.string()
    .optional()
    .refine((val) => val === undefined || /^\d*$/.test(val), { message: "Extension number must be numeric." }),

  EmailAddress: z.string()
    .email({ message: "Invalid email address." }),

  ManagerName: z.string()
    .nonempty({ message: "Manager name is required." }),

  ManagerPhoneNumber: z.string()
    .regex(/^\+?\d{9,15}$/, { message: "Manager's phone number must be between 9 and 15 digits." }),

  ManagerMobileNumber: z.string()
    .regex(/^\+?\d{9,15}$/, { message: "Manager's mobile number must be between 9 and 15 digits." }),

  Activity: z.string()
    .nonempty({ message: "Activity is required." }),

  UplevelOperationCompanyId: z.string()
    .nonempty({ message: "Uplevel operation company ID is required." }),
});

export const validateCompanyInfoData = (data: Record<string, any>) => {
  try {
    CompanyInfoSchema.parse(data);
    return { valid: true, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { valid: false, errors: error.errors };
    }
    throw error;
  }
};
