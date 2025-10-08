import api from "./api"

export const deleteData=async (id:string)=>{
    const res=await api.delete('/deleteData/'+id)
    return res.data
}