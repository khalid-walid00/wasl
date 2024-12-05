import { z } from "zod";

const emailSchema = z.string().email({ message: "البريد الإلكتروني غير صالح" });
const forgetPassSchema = z.object({
  email:emailSchema
});

export const validatePhoneAndCountry = (data: any) => {
  const parsedInput = forgetPassSchema.safeParse(data);
  if (!parsedInput.success) {
    const errors = parsedInput.error.errors.map(e => ` ${e.message}`).join(", ");
    return new Error(errors);
  }
  return parsedInput.data;
};
