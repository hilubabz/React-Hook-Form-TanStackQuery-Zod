import { Route, Routes } from "react-router-dom";
import Form from "./Form";
import Data from "./Data";

export default function App(){
  return(
    <Routes>
      <Route path="/" element={<Form/>}/>  
      <Route path="/data" element={<Data/>}/>  
    </Routes>
  )
}