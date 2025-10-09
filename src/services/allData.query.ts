import api from "./api"

export const fetchAllData=async ()=>{
    const res=await api.get('/fetchAllData')
    return res.data.data
}