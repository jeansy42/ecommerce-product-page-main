/// <reference types="vite-plugin-svgr/client" />
import { ReactComponent as PreviousBtn } from "../assets/images/icon-previous.svg";
import { ReactComponent as NextBtn } from "../assets/images/icon-next.svg";
import IMG_1 from "../assets/images/image-product-1.jpg";
import IMG_2 from "../assets/images/image-product-2.jpg";
import IMG_3 from "../assets/images/image-product-3.jpg";
import IMG_4 from "../assets/images/image-product-4.jpg";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { ContextType } from "../context/GlobalContext";

const ArrayImg = [IMG_1, IMG_2, IMG_3, IMG_4];

function PresentationMobile({
  aditionalCLass,
  d,
  t,
}: {
  aditionalCLass: string;
  d: string;
  t: string;
}) {
  const { counter, setCounter, imageRef } = useGlobalContext() as ContextType;
  return (
    <>
      <img
        ref={imageRef}
        className={`max-h-[320px] w-full object-cover object-top sm:w-${d} sm:min-w-[320px] sm:h-${d} sm:max-h-none sm:rounded-xl`}
        src={ArrayImg[counter]}
        alt={`img${counter}`}
      />
      <div
        className={`w-full px-4 flex justify-between absolute top-1/2 transform -translate-y-1/2 ${aditionalCLass}`}
      >
        <span
          className={`h-10 w-10  border-2 border-cus_P_Org flex items-center justify-center bg-white rounded-full group cursor-pointer transform -${t}`}
          onClick={() =>
            setCounter((p) => {
              if (p === 0) return ArrayImg.length - 1;
              else return p - 1;
            })
          }
        >
          <PreviousBtn className="stroke-black transform scale-75  group-hover:stroke-cus_Org" />
        </span>
        <span
          className={`h-10 w-10 border-2 border-cus_P_Org flex items-center justify-center bg-white rounded-full group cursor-pointer transform ${t}`}
          onClick={() =>
            setCounter((p) => {
              if (p === ArrayImg.length - 1) return 0;
              else return p + 1;
            })
          }
        >
          <NextBtn className="stroke-black transform scale-75 group-hover:stroke-cus_Org" />
        </span>
      </div>
    </>
  );
}

export default PresentationMobile;
