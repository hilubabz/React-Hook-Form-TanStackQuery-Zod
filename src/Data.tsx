import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import useAllData from "./hooks/useAllData";
import type { FormData } from "./services/form.zod";
import useDeleteData from "./hooks/useDeleteData";
import ModalComponent from "./ModalComponent";
import Form from "./Form";
import { useState } from "react";

export default function Data() {
  const formData = useAllData();
  const deleteData=useDeleteData()
  const columnHelper = createColumnHelper<FormData>();
  const data=formData.data
  const [isOpen,setIsOpen]=useState(false)

  const deleteRecord=(data: FormData & { _id?: string })=>{
    if (!data._id) {
      console.warn("No _id on record, cannot delete")
      return
    }
    console.log(data._id)
    deleteData.mutate(data._id)
  }
  const columns = [
    columnHelper.accessor("fullName", { header: "Full Name"}),
    columnHelper.accessor("email", { header: "Email" }),
    columnHelper.accessor((row)=>row.phone?.[0]??'',{
        id:'phone1',
        header:'Phone 1'
    }),
    columnHelper.accessor((row)=>row.phone?.[1]??'',{
        id:'phone2',
        header:'Phone 2'
    }),
    columnHelper.accessor("companyName", { header: "Company Name" }),
    columnHelper.accessor("dateOfExperience", { header: "Date of Experience", 
        cell:info=>{
            const val=new Date(info.getValue())
            return val.toISOString().split('T')[0]
        }
     }),
    columnHelper.accessor("rating", { header: "Rating" }),
    columnHelper.accessor("rateQuality", { header: "Quality Rating" }),
    columnHelper.accessor("rateSupport", { header: "Support Rating" }),
    columnHelper.accessor("recommend", { header: "Recommendation" }),
    columnHelper.accessor("subscription", { header: "Subscription Type" }),
    columnHelper.accessor("period", { header: "Subscription Period",
        cell:info=>{
            const val=info.getValue()
            return val?val:'-'
        }
     }),
    columnHelper.accessor("card", { header: "Card Information",
        cell:info=>{
            const val=info.getValue()
            return val?val:'-'
        }
     }),
    columnHelper.accessor("like", { header: "Like" }),
    columnHelper.accessor("improvement", { header: "Improvement Message" }),
    columnHelper.accessor("contactFollowUp", {
      header: "Follow Up Contact Permission",
    }),
    columnHelper.accessor("shareFeedback", { header: "Share Feedback" }),
    columnHelper.accessor((row)=>row.social?.facebook??"",{
        id:'facebook',
        header:'Facebook',
        cell:info=>{
            return(
                <div className="text-blue-500 underline">{info.getValue()}</div>
            )
        }
    }),
    columnHelper.accessor((row)=>row.social?.instagram??'',{
        id:'instagram',
        header:'Instagram',
        cell:info=>{
            return(
                <div className="text-blue-500 underline">{info.getValue()}</div>
            )
        }
    }),
    columnHelper.display({
        id:'actions',
        header:'Actions',
        cell:info=>{
            return(
            <button className="bg-gradient-to-br from-red-500 to-red-800 rounded-xl cursor-pointer text-white px-2 py-1 text-lg" onClick={()=>deleteRecord(info.row.original)}>Delete</button>
            )
        }
    })
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  if (formData.isPending) return <p>Loading...</p>;
  if (formData.error) return <p>Error loading data.</p>;

  if (data.length === 0)
    return <p className="text-center text-gray-500">No data found</p>;

  return (
    <table className="min-w-full border border-gray-500">
      <thead className="bg-gray-100">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="p-2 border-b border-r">
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className="p-2 border-b border-r text-center whitespace-nowrap">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      {!isOpen?(<div onClick={()=>setIsOpen(true)}>Show Modal</div>):
      (<ModalComponent setIsOpen={setIsOpen}>
        <Form/>
      </ModalComponent>)}
    </table>
  );
}
