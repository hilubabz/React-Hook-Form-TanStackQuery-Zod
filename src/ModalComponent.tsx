import { type ReactElement } from "react"
import { createPortal } from "react-dom"

export default function ModalComponent({children,setIsOpen}:{children:ReactElement,setIsOpen:Function}){

    return(
        <>
            { createPortal(
                    <div className="fixed top-0 w-[100vw] h-[100vh] overflow-auto bg-black/20 flex justify-center items-start">
                        <div className="fixed top-5 right-7 h-10 w-10 rounded-full flex items-center justify-center bg-gray-500 ease-in-out duration-500 cursor-pointer" onClick={()=>setIsOpen(false)}>X</div>
                        {children}
                    </div>, 
                    document.body
                )
            }
        </>
    )
}