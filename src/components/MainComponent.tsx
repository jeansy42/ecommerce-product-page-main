/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";
import { ReactComponent as Plus } from "../assets/images/icon-plus.svg";
import { ReactComponent as Minus } from "../assets/images/icon-minus.svg";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ContextType } from "../context/GlobalContext";

function Component() {
  const { price, countItems, setCountItems, productName, setCountItemsCart } =
    useGlobalContext() as ContextType;
  return (
    <div className="px-4 flex flex-col gap-2 justify-between py-6">
      <h2 className="text-sm font-bold text-cus_Org uppercase">
        Sneaker Company
      </h2>
      <h4 className="font-bold text-3xl">{productName}</h4>
      <p className="text-cus_DGB">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="flex justify-between items-center sm:flex-col sm:items-start">
        <div className="flex items-center gap-4 my-3">
          <span className="font-bold text-3xl">{`$${price.toFixed(2)}`}</span>
          <span className="py-0.5 px-2 font-bold text-cus_Org bg-cus_P_Org rounded-lg">
            50%
          </span>
        </div>
        <span className="line-through text-slate-300 font-bold">{`$${(
          price * 2
        ).toFixed(2)}`}</span>
      </div>
      <div>
        <div className="flex flex-col max-w-xs m-auto mb-12  sm:grid sm:grid-cols-2 sm:m-0 sm:max-w-lg sm:gap-4">
          <div className="flex justify-between items-center p-4 mb-6 bg-cus_LGB rounded-lg sm:py-0 sm:mb-0">
            <Minus className="cursor-pointer hover:opacity-50"
              onClick={() => {
                setCountItems((p) => {
                  if (p > 0) return p - 1;
                  else return 0;
                });
              }}
            />
            <span className="font-bold">{countItems}</span>
            <Plus className="cursor-pointer hover:opacity-50" onClick={() => setCountItems((p) => p + 1)} />
          </div>
          <button
            className="w-full p-4 rounded-xl flex justify-center items-center gap-2 bg-cus_Org text-white font-bold shadow-2xl shadow-orange-200 hover:opacity-50"
            onClick={() => {
              setCountItemsCart((p) => p + countItems);
              setCountItems(0);
            }}
          >
            <Cart className="fill-white" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Component;
