import api from "./api";
import type { FormData } from "./form.zod";

export const addFormData = async (formData:FormData) => {
  const res = await api.post("/addData", formData);
  return res.data
};
