import * as Yup from 'yup';

/**
 * دالة عامة للتحقق من الحقول باستخدام Yup
 * @param schema 
 * @param field 
 * @param value 
 * @returns {Promise<boolean>} 
 */
export const validateField = async (schema: Yup.ObjectSchema<any>, field: string, value: any): Promise<boolean> => {
  try {
    const fieldSchema = Yup.reach(schema, field);

    if (fieldSchema instanceof Yup.Schema) {
      await fieldSchema.validate(value);
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
};
