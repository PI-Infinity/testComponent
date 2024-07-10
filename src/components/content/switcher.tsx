import { useAppContext } from "@/context/appContext";
import React from "react";

interface PropsTypes {
  item: any;
  handleclick: any;
}

const Switcher: React.FC<PropsTypes> = ({ item, handleclick }) => {
  // app context
  const { active } = useAppContext();

  return (
    <div className="h-[6.4vw] desktop:h-[1.66vw] flex items-center">
      <div
        className={`w-[6.4vw] desktop:w-[1.66vw] desktop:h-[0.97vw] rounded-[50px] border-[2px]  flex items-center justify-end p-[0.53vw] desktop:p-[0.14vw] cursor-pointer ${
          item.businessSize === active.value
            ? "bg-[#9d71fd] border-[#9d71fd] justify-end"
            : "border-[#a39cb5]"
        }`}
        onClick={handleclick}
      >
        <div
          className={`w-[1.6vw] desktop:w-[0.41vw] aspect-square rounded-[50%] bg-[#a39cb5] ${
            item.businessSize === active.value && "bg-white"
          }`}
        />
      </div>
    </div>
  );
};

export default Switcher;
