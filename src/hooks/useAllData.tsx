import { useQuery } from "@tanstack/react-query";
import { fetchAllData } from "../services/allData.query";

export default function useAllData(){
    const {isLoading,isError,data,error} = useQuery({queryKey:['fetchAllData'],queryFn:fetchAllData})
    console.log(data)
    return {isPending: isLoading, error: isError ? error : null, data: data ?? []}
}