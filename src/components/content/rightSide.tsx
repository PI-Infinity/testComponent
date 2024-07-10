import React from "react";
import ConnectLines from "./connectLines";
import ConnectItem from "./companyItem";
import { useAppContext } from "@/context/appContext";

const RightSide = () => {
  // companies list
  const { active } = useAppContext();

  return (
    <div className="flex-1 flex items-center w-full desktop:w-[27.7vw] desktop:h-[19.44vw]">
      <ConnectLines active="true" side="right" />
      <div className="h-full w-full desktop:w-[19.44vw] flex flex-col gap-[2.66vw] gap-[0.69vw] desktop:gap-0 desktop:justify-between">
        {active.items
          .filter((i: any) => i.layout === "right")
          .map((item: any, index: number) => {
            return <ConnectItem key={index} item={item} />;
          })}
      </div>
    </div>
  );
};

export default RightSide;
