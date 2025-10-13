import { createContext, useContext, useState, type ReactElement } from "react";

interface ModalContextType {
  isOpen: boolean;
  toggleModal: (val:boolean) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactElement }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = (val:boolean) => setIsOpen(val);

  return (
    <ModalContext.Provider value={{ isOpen,toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within a ModalProvider");
  return context;
};