import axios from "axios";
import type { FormInput } from "./form.types";

export const addFormData = async (formData: FormInput) => {
  const res = await axios.post("http://localhost:5000/addData", formData);
  return res.data
};
