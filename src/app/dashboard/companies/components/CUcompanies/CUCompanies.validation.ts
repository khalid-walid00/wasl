import * as Yup from 'yup';

const companySchema = Yup.object({
  Name: Yup.string()
    .min(3, "اسم الشركة يجب أن يحتوي على 3 أحرف على الأقل.")
    .required("اسم الشركة مطلوب."),

  IdentityNumber: Yup.string()
    .matches(/^(10|70)\d{8}$/, "رقم الهوية يجب أن يبدأ بـ '10' أو '70' ويتكون من 10 أرقام.")
    .length(10, "رقم الهوية يجب أن يكون مكوناً من 10 أرقام.")
    .required("رقم الهوية مطلوب."),

  CommercialRecordNumber: Yup.string()
    .required("رقم السجل التجاري مطلوب."),

  CommercialRecordIssueDateHijri: Yup.string()
    .required("تاريخ إصدار السجل التجاري مطلوب."),

  DateOfBirthHijri: Yup.string()
    .required("تاريخ الميلاد بالهجري مطلوب."),

  DateOfBirthGregorian: Yup.string()
    .required("تاريخ الميلاد بالميلادي مطلوب."),

  PhoneNumber: Yup.string()
    .required("رقم الهاتف مطلوب.")
    .min(9, "رقم الهاتف يجب أن يكون مكوناً من 9 أرقام.")
    .max(15, "رقم الهاتف يجب أن يكون مكوناً من 15 رقمًا."),

  ExtensionNumber: Yup.string()
    .optional(),

  EmailAddress: Yup.string()
    .email("البريد الإلكتروني غير صحيح.")
    .required("البريد الإلكتروني مطلوب."),

  ManagerName: Yup.string()
    .required("اسم المدير مطلوب."),

  ManagerPhoneNumber: Yup.string()
    .required("رقم هاتف المدير مطلوب."),

  ManagerMobileNumber: Yup.string()
    .required("رقم جوال المدير مطلوب.")
    .min(9, "رقم الجوال يجب أن يكون مكوناً من 9 أرقام.")
    .max(15, "رقم الجوال يجب أن يكون مكوناً من 15 رقمًا."),

  Activity: Yup.string()
    .required("نشاط الشركة مطلوب."),

  UplevelOperationCompanyId: Yup.string()
    .min(3, "رقم الشركة العليا يجب أن يحتوي على 3 أحرف على الأقل.")
});

export const validateCompanyData = async (data: Record<string, any>) => {
  try {
    console.log("validateCompanyData", data);
    await companySchema.validate(data, { abortEarly: false });
    return { valid: true, errors: null };
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      const errorMessages = error.errors.join(" | ");
      return {
        valid: false,
        errors: errorMessages,
      };
    }
    throw error;
  }
};
