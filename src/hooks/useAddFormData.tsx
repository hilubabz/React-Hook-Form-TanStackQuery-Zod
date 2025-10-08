import { useQueryClient,useMutation } from "@tanstack/react-query";
import { addFormData } from "../services/formData.mutation";

const useAddFormData = () => {
    const queryClient=useQueryClient()
  const addFormDatas = useMutation({
    mutationKey: ["addFormData"],
    mutationFn: addFormData,
    onSuccess: (data) => {
      alert(data.message);
      queryClient.invalidateQueries({ queryKey: ["formData"] });
    },
  });
  return addFormDatas
};

export default useAddFormData;
