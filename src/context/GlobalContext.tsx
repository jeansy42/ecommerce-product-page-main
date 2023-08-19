import { ReactNode, useState, useRef } from "react";
import { context } from "../hooks/useGlobalContext";
export type ContextType = {
  showNav: boolean;
  shopingCart: boolean;
  showPreview: boolean;
  setShopingCart: React.Dispatch<React.SetStateAction<boolean>>;
  setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  setShowPreview: React.Dispatch<React.SetStateAction<boolean>>;
  price: number;
  counter: number;
  countItems: number;
  setCountItems: React.Dispatch<React.SetStateAction<number>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  productName: string;
  refCart: React.RefObject<HTMLSpanElement>;
  imageRef: React.RefObject<HTMLImageElement>;
  countItemsCart: number;
  setCountItemsCart: React.Dispatch<React.SetStateAction<number>>;
};

function GlobalContext({ children }: { children: ReactNode }) {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showPreview, setShowPreview] = useState<boolean>(false);
  const [shopingCart, setShopingCart] = useState<boolean>(false);
  const [price] = useState<number>(125);
  const [productName] = useState<string>("Fall Limited Edition Sneakers");
  const [countItems, setCountItems] = useState<number>(0);
  const [countItemsCart, setCountItemsCart] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const refCart = useRef<HTMLSpanElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  return (
    <context.Provider
      value={{
        showNav,
        setShowNav,
        price,
        countItems,
        setCountItems,
        productName,
        shopingCart,
        setShopingCart,
        refCart,
        countItemsCart,
        setCountItemsCart,
        imageRef,
        showPreview,
        setShowPreview,
        counter,
        setCounter,
      }}
    >
      {children}
    </context.Provider>
  );
}

export default GlobalContext;
