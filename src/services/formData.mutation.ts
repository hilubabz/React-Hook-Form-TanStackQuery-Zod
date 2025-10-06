import type { FormInput } from "./form.types";
import api from "./api";

export const addFormData = async (formData: FormInput) => {
  const res = await api.post("/addData", formData);
  return res.data
};
