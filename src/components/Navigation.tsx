/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as CloseBtn } from "../assets/images/icon-close.svg";
import { ContextType } from "../context/GlobalContext";
import { useGlobalContext } from "../hooks/useGlobalContext";
function NavigationMobile() {
  const { setShowNav } = useGlobalContext() as ContextType;
  return (
    <div className="flex w-screen h-full fixed top-0 sm:hidden z-10 ">
      <div className="flex flex-col gap-8 p-5 bg-white opacity-100 w-4/6 h-full ">
        <CloseBtn className="fill-cus_DGB cursor-pointer" onClick={() => setShowNav(false)} />
        <ul className="flex flex-col gap-6 font-bold" role="navigation">
          <li className="cursor-pointer hover:opacity-30">Collections</li>
          <li className="cursor-pointer hover:opacity-30">Men</li>
          <li className="cursor-pointer hover:opacity-30">Women</li>
          <li className="cursor-pointer hover:opacity-30">About</li>
          <li className="cursor-pointer hover:opacity-30">Contact</li>
        </ul>
      </div>
      <div className="bg-black opacity-75 w-2/6"></div>
    </div>
  );
}

export default NavigationMobile;
