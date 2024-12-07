import { z } from 'zod';

const companySchema = z.object({
  Name: z
    .string()
    .min(3, { message: "اسم الشركة يجب أن يحتوي على 3 أحرف على الأقل." })
    .nonempty({ message: "اسم الشركة مطلوب." }),

  IdentityNumber: z
    .string()
    .length(10, { message: "رقم الهوية يجب أن يكون مكوناً من 10 أرقام." }),

  CommercialRecordNumber: z
    .string()
    .nonempty({ message: "رقم السجل التجاري مطلوب." }),

  CommercialRecordIssueDateHijri: z
    .string()
    .nonempty({ message: "تاريخ إصدار السجل التجاري مطلوب." }),

  DateOfBirthHijri: z
    .string()
    .nonempty({ message: "تاريخ الميلاد بالهجري مطلوب." }),

  DateOfBirthGregorian: z
    .string()
    .nonempty({ message: "تاريخ الميلاد بالميلادي مطلوب." }),

  PhoneNumber: z
    .string()
    .nonempty({ message: "رقم الهاتف مطلوب." })
    .min(9, { message: "رقم الهاتف يجب أن يكون مكوناً من 9 أرقام." })
    .max(15, { message: "رقم الهاتف يجب أن يكون مكوناً من 15 رقمًا." }),

  ExtensionNumber: z
    .string()
    .optional(),

  EmailAddress: z
    .string()
    .nonempty({ message: "البريد الإلكتروني مطلوب." })
    .email({ message: "البريد الإلكتروني غير صحيح." }),

  ManagerName: z
    .string()
    .nonempty({ message: "اسم المدير مطلوب." }),

  ManagerPhoneNumber: z
    .string()
    .nonempty({ message: "رقم هاتف المدير مطلوب." }),

  ManagerMobileNumber: z
    .string()
    .nonempty({ message: "رقم جوال المدير مطلوب." })
    .min(9, { message: "رقم الجوال يجب أن يكون مكوناً من 9 أرقام." })
    .max(15, { message: "رقم الجوال يجب أن يكون مكوناً من 15 رقمًا." }),

  Activity: z
    .string()
    .nonempty({ message: "نشاط الشركة مطلوب." }),

  UplevelOperationCompanyId: z
    .string()
    .min(3, { message: "رقم الشركة العليا يجب أن يحتوي على 3 أحرف على الأقل." })
});

export const validateCompanyData = (data: Record<string, any>) => {
  try {
    console.log("validateCompanyData", data);
    companySchema.parse(data);
    return { valid: true, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => err.message);
      return {
        valid: false,
        errors: errorMessages.join(" | "),
      };
    }
    throw error;
  }
};
