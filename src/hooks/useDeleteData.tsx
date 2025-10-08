import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteData } from "../services/deleteData.mutation";

export default function useDeleteData(){
    const queryClient = useQueryClient()
    const result = useMutation({
        mutationKey:['deleteData'],
        mutationFn: deleteData,
        onSuccess:(data)=>{
            alert(data.message)
            queryClient.invalidateQueries({queryKey:['fetchAllData']})
        }
    })
    return result
}