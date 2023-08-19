import { createContext, useContext } from "react";
import { ContextType } from "../context/GlobalContext";

export const context = createContext<ContextType | undefined>(undefined);
export const useGlobalContext = () => {
  const utilContext = useContext(context);
  return utilContext;
};
