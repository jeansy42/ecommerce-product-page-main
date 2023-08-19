import IMG_1 from "../assets/images/image-product-1-thumbnail.jpg";
import IMG_2 from "../assets/images/image-product-2-thumbnail.jpg";
import IMG_3 from "../assets/images/image-product-3-thumbnail.jpg";
import IMG_4 from "../assets/images/image-product-4-thumbnail.jpg";
import { ContextType } from "../context/GlobalContext";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { useRef, useEffect } from "react";

function SelectImgDesk({ pad }: { pad: string }) {
  const smallImgRef = useRef<HTMLImageElement>(null);
  const smallImgRef1 = useRef<HTMLImageElement>(null);
  const smallImgRef2 = useRef<HTMLImageElement>(null);
  const smallImgRef3 = useRef<HTMLImageElement>(null);

  const ArrayImg = [IMG_1, IMG_2, IMG_3, IMG_4];
  const ArrayRef = [smallImgRef, smallImgRef1, smallImgRef2, smallImgRef3];

  const { setShowPreview, counter, setCounter, imageRef } =
    useGlobalContext() as ContextType;

  useEffect(() => {
    for (const r of ArrayRef) {
      if (imageRef.current?.alt === r.current?.alt) {
        r.current?.classList.add("border-2");
        r.current?.classList.add("border-cus_Org");
        r.current?.classList.add("opacity-50");
      } else {
        r.current?.classList.remove("border-2");
        r.current?.classList.remove("border-cus_Org");
        r.current?.classList.remove("opacity-50");
      }
    }
  }, [counter]);

  return (
    <div className={`hidden w-full sm:flex justify-between ${pad}`}>
      {ArrayImg.map((img, ind) => (
        <img
          ref={ArrayRef[ind]}
          key={ArrayImg.indexOf(img)}
          src={img}
          alt={`img${ArrayImg.indexOf(img)}`}
          onClick={() => {
            setShowPreview(true);
            setCounter(ArrayImg.indexOf(img));
          }}
          className="w-14 h-14 rounded-lg hover:opacity-50 cursor-pointer "
        />
      ))}
    </div>
  );
}

export default SelectImgDesk;
