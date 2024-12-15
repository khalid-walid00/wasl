import * as Yup from 'yup';

const driverSchema = Yup.object({
  driverId: Yup.number()
    .required("رقم السائق مطلوب.")
    .positive("رقم السائق يجب أن يكون رقمًا موجبًا.")
    .integer("رقم السائق يجب أن يكون عددًا صحيحًا."),

  driverName: Yup.string()
    .required("اسم السائق مطلوب.")
    .min(3, "اسم السائق يجب أن يحتوي على 3 أحرف على الأقل.")
    .max(50, "اسم السائق يجب ألا يتجاوز 50 حرفًا."),

  driverNameArabic: Yup.string()
    .required("اسم السائق بالعربية مطلوب.")
    .min(3, "اسم السائق بالعربية يجب أن يحتوي على 3 أحرف على الأقل.")
    .max(50, "اسم السائق بالعربية يجب ألا يتجاوز 50 حرفًا."),

  driverAssignedAsset: Yup.string()
    .required("الأصل المعين للسائق مطلوب.")
    .min(3, "اسم الأصل يجب أن يحتوي على 3 أحرف على الأقل.")
    .max(50, "اسم الأصل يجب ألا يتجاوز 50 حرفًا."),

  licenseNumber: Yup.string()
    .required("رقم الرخصة مطلوب.")
    .min(5, "رقم الرخصة يجب أن يحتوي على 5 أحرف على الأقل.")
    .max(20, "رقم الرخصة يجب ألا يتجاوز 20 حرفًا."),

  licenseNumberArabic: Yup.string()
    .required("رقم الرخصة بالعربية مطلوب.")
    .min(5, "رقم الرخصة بالعربية يجب أن يحتوي على 5 أحرف على الأقل.")
    .max(20, "رقم الرخصة بالعربية يجب ألا يتجاوز 20 حرفًا."),

  mobileNumber: Yup.string()
    .required("رقم الجوال مطلوب.")
    .matches(/^[0-9]+$/, "رقم الجوال يجب أن يحتوي على أرقام فقط.")
    .min(9, "رقم الجوال يجب أن يكون مكوناً من 9 أرقام.")
    .max(15, "رقم الجوال يجب ألا يتجاوز 15 رقمًا."),

  tagid: Yup.string()
    .required("معرف العلامة مطلوب.")
    .min(5, "معرف العلامة يجب أن يحتوي على 5 أحرف على الأقل.")
    .max(20, "معرف العلامة يجب ألا يتجاوز 20 حرفًا."),

  licenseExpiry: Yup.string()
    .required("تاريخ انتهاء الرخصة مطلوب.")
    .matches(
      /^\d{4}-\d{2}-\d{2}$/,
      "تاريخ انتهاء الرخصة يجب أن يكون بتنسيق YYYY-MM-DD."
    ),
});

export const validateDriverData = async (data: Record<string, any>) => {
  try {
    console.log("validateDriverData", data);
    await driverSchema.validate(data, { abortEarly: false }); // منع الإنهاء المبكر لتجميع كل الأخطاء
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
