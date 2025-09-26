import axios from "axios"
 
export const fetchFormData=()=>{
    return axios.get('http://localhost:5000/fetchData')
        .then((res)=>res.data)
} 