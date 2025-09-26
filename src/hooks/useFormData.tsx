import { useQuery } from "@tanstack/react-query"
import { fetchFormData } from "../services/formData.query"


const useFormData = () => {
      const {isPending,error, data}=useQuery({queryKey:['formData'],
        queryFn:fetchFormData
      })
 return {isPending,error,data}
}

export default useFormData