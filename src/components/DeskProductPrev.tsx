/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as Close } from "../assets/images/icon-close.svg";
import { ContextType } from "../context/GlobalContext";
import { useGlobalContext } from "../hooks/useGlobalContext";
import PresentationMobile from "./PresentationMobile";
import SelectImgDesk from "./SelectImgDesk";

function DeskProductPrev() {
  const { setShowPreview } = useGlobalContext() as ContextType;
  return (
    <div className="hidden z-20 w-screen h-full sm:flex fixed top-0 justify-center items-center">
      <div className="w-screen h-full fixed top-0 bg-black opacity-75"></div>
      <div className=" z-30 w-max">
        <div className="flex justify-end mb-4">
          <Close
            className="fill-white hover:fill-cus_Org cursor-pointer"
            onClick={() => setShowPreview(false)}
          />
        </div>
        <div className="relative flex flex-col gap-5">
          <PresentationMobile
            d="96"
            t={"translate-x-9"}
            y={"-translate-x-9"}
            aditionalCLass=""
          />
          <SelectImgDesk pad="px-6" />
        </div>
      </div>
    </div>
  );
}

export default DeskProductPrev;
