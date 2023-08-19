/// <reference types="vite-plugin-svgr/client" />
import { useRef, useEffect } from "react";
import { ReactComponent as Delete } from "../assets/images/icon-delete.svg";
import PreviewImg from "../assets/images/image-product-1-thumbnail.jpg";
import { ContextType } from "../context/GlobalContext";
import { useGlobalContext } from "../hooks/useGlobalContext";

function CartModal() {
  const {
    productName,
    price,
    shopingCart,
    setShopingCart,
    refCart,
    countItemsCart,
    setCountItemsCart,
  } = useGlobalContext() as ContextType;
  const refModal = useRef<HTMLDivElement>(null);

  const closeShopingCart = (e: MouseEvent) => {
    if (
      !refModal.current?.contains(e.target as Node) &&
      !refCart.current?.contains(e.target as Node)
    )
      setShopingCart(false);
  };

  useEffect(() => {
    if (shopingCart) {
      document.addEventListener("click", closeShopingCart);

      return () => document.removeEventListener("click", closeShopingCart);
    }
  }, [shopingCart]);

  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 top-2 rounded-md bg-white w-11/12 max-w-sm shadow-2xl sm:-top-32  sm:transform-none sm:left-auto sm:right-0 z-[25]"
      ref={refModal}
    >
      <div className="flex items-center font-bold h-16 py-8 p-4 border-b  border-gray-200">
        Cart
      </div>
      {countItemsCart > 0 ? (
        <div className="p-6">
          <div className="flex justify-between items-center">
            <img
              className="h-12 w-12 rounded-md"
              src={PreviewImg}
              alt="PreviewImg"
            />
            <div>
              <h5 className="text-cus_DGB">{productName}</h5>
              <div className="flex gap-2 text-cus_DGB">
                <span>{`${price.toFixed(2)} x `}</span>
                <span>{countItemsCart}</span>
                <span className="font-bold text-black">{`$${(
                  price * countItemsCart
                ).toFixed(2)}`}</span>
              </div>
            </div>
            <Delete className="cursor-pointer" onClick={() => setCountItemsCart(0)} />
          </div>
          <button className="w-full bg-cus_Org rounded-md py-3.5 mt-6 text-white hover:opacity-50">
            Checkout
          </button>
        </div>
      ) : (
        <div className="w-full min-h-[200px] flex items-center justify-center text-cus_DGB font-bold">
          Your cart is empty.
        </div>
      )}
    </div>
  );
}
export default CartModal;
