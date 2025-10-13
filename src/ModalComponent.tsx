import { type ReactElement } from "react";
import { createPortal } from "react-dom";

type ModalComponentProps = {
  children: ReactElement;
  setIsOpen: (val:boolean)=>void;
  submitButtonText: string;
  cancelButtonText: string;
  title: string;
  onSubmit: ()=>void;
  isOpen:boolean
};

export default function ModalComponent({
  children,
  isOpen,
  setIsOpen,
  submitButtonText,
  cancelButtonText,
  title,
  onSubmit,
}: ModalComponentProps) {
  
  
   if(!isOpen) return null 
    return (
    <>
      {createPortal(
        <div className="fixed top-0 w-[100vw] h-[100vh] overflow-auto bg-black/20 flex justify-center items-start">
          <div className="relative mt-10 bg-white w-[50%] pt-2">
            <div
              className="absolute top-[-20px] right-[-20px] h-10 w-10 bg-black text-white rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              X
            </div>
            <div className="flex justify-around bg-white">
              <div className="text-xl font-bold">{title}</div>
              <div className="flex gap-4">
                <button
                  className="px-2 py-1 rounded-xl bg-white border-1"
                  onClick={onSubmit}
                >
                  {submitButtonText}
                </button>
                <button
                  className="px-2 py-1 rounded-xl bg-black text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {cancelButtonText}
                </button>
              </div>
            </div>
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
