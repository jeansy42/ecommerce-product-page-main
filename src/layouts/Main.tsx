import CartModal from "../components/CartModal";
import Component from "../components/MainComponent";
import PresentationMobile from "../components/PresentationMobile";
import SelectImgDesk from "../components/SelectImgDesk";
import { ContextType } from "../context/GlobalContext";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Main() {
  const { shopingCart } = useGlobalContext() as ContextType;
  return (
    <>
      <div
        className="relative sm:px-5  md:flex justify-between gap-14 xl:px-10"
        role="main"
      >
        {shopingCart && <CartModal />}
        <div className="relative mb-5 sm:w-max sm:flex flex-col sm:mx-auto md:mb-0 justify-between gap-6 ">
          <PresentationMobile d="80" t="0" y="0" aditionalCLass="sm:hidden" />
          <SelectImgDesk pad="px-0" />
        </div>
        <Component />
      </div>
    </>
  );
}

export default Main;
