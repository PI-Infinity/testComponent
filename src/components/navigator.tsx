import { useAppContext } from "@/context/appContext";
import React from "react";

const Navigator = () => {
  // app context
  const { navigatorItems, active, setActive } = useAppContext();
  return (
    <div className="flex desktop:items-center justify-center max-w-[117.33vw] w-full desktop:w-[25.41vw] desktop:w-auto overflow-x-auto h-[17.86vw] desktop:h-[2.63vw] mt-[5.6vw] desktop:mt-0 desktop:gap-[0.55vw]">
      {navigatorItems.map((item: any, index: number) => {
        return (
          <button
            key={index}
            onClick={() =>
              setActive((prev: any) => ({ ...prev, value: item.value }))
            }
            className={`font-custom min-w-[39.11vw] desktop:min-w-0 h-[12.05vw] desktop:h-[2.63vw] 
              text-[3.73vw] desktop:text-[0.83vw] leading-[5.97vw] desktop:leading-[1.33vw] font-[700] text-[#543e81]
               whitespace-nowrap desktop:rounded-[0.83vw] text-center
               flex items-center justify-center desktop:px-[1.05vw] cursor-pointer ${
                 active.value === item.value
                   ? " bg-none desktop:bg-[#9d71fd] text-[#9D71FD] desktop:text-white border-b-[0.53vw] desktop:border-[0.07vw] border-[#9d71fd] opacity-[1]"
                   : "border-b-[0.27vw] desktop:border-b-[0.07vw] border-[#1a07451a] desktop:border-[0.07vw] opacity-[0.6]"
               }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default Navigator;
