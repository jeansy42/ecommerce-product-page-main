/// <reference types="vite-plugin-svgr/client" />
import Avatar from "../assets/images/image-avatar.png";
import { ReactComponent as Cart } from "../assets/images/icon-cart.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { ReactComponent as MenuBtn } from "../assets/images/icon-menu.svg";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ContextType } from "../context/GlobalContext";
function Header() {
  const { setShowNav, setShopingCart, refCart, countItemsCart } =
    useGlobalContext() as ContextType;
  return (
    <div className="flex items-center justify-between px-5 h-20 sm:h-28 sm:mb-28 sm:border-b border-gray-200 ">
      <div className="h-full flex items-center gap-4 sm:gap-14 sm:flex-shrinks">
        <MenuBtn
          onClick={() => setShowNav(true)}
          className="cursor-pointer sm:hidden "
        />
        <Logo role="banner" />
        {/*____________Desktop_______________*/}
        <ul
          className="hidden h-full  sm:flex gap-6 text-cus_DGB "
          role="navigation"
        >
          <li className="h-full cursor-pointer flex items-center pt-1 border-b-4 border-transparent hover:border-cus_Org hover:text-black">
            Collections
          </li>
          <li className="h-full cursor-pointer flex items-center pt-1 border-b-4 border-transparent hover:border-cus_Org hover:text-black">
            Men
          </li>
          <li className="h-full cursor-pointer flex items-center pt-1 border-b-4 border-transparent hover:border-cus_Org hover:text-black">
            Women
          </li>
          <li className="h-full cursor-pointer flex items-center pt-1 border-b-4 border-transparent hover:border-cus_Org hover:text-black">
            About
          </li>
          <li className="h-full cursor-pointer flex items-center pt-1 border-b-4 border-transparent hover:border-cus_Org hover:text-black">
            Contact
          </li>
        </ul>
        {/*____________Desktop_______________*/}
      </div>

      <div className="flex items-center gap-5 sm:flex-shrink-0 ">
        <span className="relative " ref={refCart}>
          {countItemsCart > 0 && (
            <span className="absolute  -right-1 bottom-3 bg-cus_Org text-white font-custom font-bold rounded-full px-1.5">
              {countItemsCart}
            </span>
          )}
          <Cart
            onClick={() => setShopingCart(true)}
            className=" fill-cus_DGB hover:fill-black cursor-pointer "
          />
        </span>
        <img
          src={Avatar}
          alt="Avatar"
          className="cursor-pointer h-6 w-6 rounded-full sm:h-14 sm:w-14 border-2 border-transparent sm:hover:border-cus_Org"
        />
      </div>
    </div>
  );
}

export default Header;
