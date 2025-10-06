import api from "./api"
 
export const fetchFormData=()=>{
    return api.get('/fetchData')
        .then((res)=>res.data)
} 