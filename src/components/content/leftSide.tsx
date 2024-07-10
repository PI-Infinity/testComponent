import React from "react";
import ConnectLines from "./connectLines";
import CompanyItem from "./companyItem";
import { useAppContext } from "@/context/appContext";

const LeftSide = () => {
  // app context
  const { active } = useAppContext();

  return (
    <div className="flex-1 flex items-center w-full desktop:w-[27.7vw] desktop:h-[19.44vw]">
      <div className="h-full w-full desktop:w-[19.44vw] flex flex-col gap-[2.66vw] desktop:gap-[0.69vw] desktop:gap-0 desktop:justify-between">
        {active.items
          .filter((i: any) => i.layout === "left")
          .map((item: any, index: number) => {
            return <CompanyItem key={index} item={item} />;
          })}
      </div>
      <ConnectLines active="true" side="left" />
    </div>
  );
};

export default LeftSide;
