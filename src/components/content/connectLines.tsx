import { useAppContext } from "@/context/appContext";
import React from "react";

interface propsTypes {
  active: string;
  side: string;
}

const ConnectLines: React.FC<propsTypes> = ({ side }) => {
  // app context
  const { active } = useAppContext();

  return (
    <div
      className="hidden desktop:flex flex-col relative w-[8.33vw] h-[13.81vw]"
      style={{
        transform: side === "right" ? "scaleX(-1)" : "inherit",
      }}
    >
      <div className="flex flex-col w-full relative h-[50%]">
        <div
          className={`flex h-1/2 absolute top-0 left-0 w-[calc(50%+1px)] border-t-[0.14vw] rounded-tr-[14px] border-r-[0.14vw] ${
            active.items.some(
              (item: any, index: number) =>
                item.businessSize === active.value &&
                index === (side === "left" ? 0 : 3)
            )
              ? "border-t-[#9D71FD] border-r-[#9D71FD] z-10"
              : "border-t-[#D7CFFD] border-r-[#D7CFFD]"
          }`}
        />
        <div
          className={`flex ml-auto absolute right-0 bottom-[-0.14vw] w-[calc(50%+1px)] h-[calc(50%+0.14vw)] rounded-bl-[14px] border-l-[0.14vw] border-b-[0.14vw] ${
            active.items.some(
              (item: any, index: number) =>
                item.businessSize === active.value &&
                index === (side === "left" ? 0 : 3)
            )
              ? "border-l-[#9D71FD] border-b-[#9D71FD] z-10"
              : "border-l-[#D7CFFD] border-b-[#D7CFFD]"
          }`}
        />
      </div>
      <div className={`w-full flex`}>
        <div
          className={`h-[0.14vw] w-[calc(100%+2.5vw)] ${
            active.items.some(
              (item: any, index: number) =>
                item.businessSize === active.value &&
                index === (side === "left" ? 1 : 4)
            )
              ? "bg-[#9D71FD] z-10"
              : "bg-[#D7CFFD]"
          }`}
        />
        <div
          className={`w-full h-[0.14vw] ${
            active.items.some(
              (item: any) =>
                item.layout === side && item.businessSize === active.value
            )
              ? "bg-[#9D71FD] z-10"
              : ""
          }`}
        />
      </div>
      <div className="flex flex-col w-full h-[50%] relative">
        <div
          className={`flex absolute right-0 top-[-0.14vw] w-[calc(50%+1px)] h-[calc(50%+0.14vw)] rounded-tl-[14px] border-t-[0.14vw] border-l-[0.14vw] ${
            active.items.some(
              (item: any, index: number) =>
                item.businessSize === active.value &&
                index === (side === "left" ? 2 : 5)
            )
              ? "border-l-[#9D71FD] border-t-[#9D71FD]"
              : "border-l-[#D7CFFD] border-t-[#D7CFFD]"
          }`}
        />
        <div
          className={`flex h-1/2 ml-auto absolute left-0 bottom-0 w-[calc(50%+1px)] rounded-br-[14px] border-r-[0.14vw] border-b-[0.14vw] ${
            active.items.some(
              (item: any, index: number) =>
                item.businessSize === active.value &&
                index === (side === "left" ? 2 : 5)
            )
              ? "border-r-[#9D71FD] border-b-[#9D71FD]"
              : "border-r-[#D7CFFD] border-b-[#D7CFFD]"
          }`}
        />
      </div>
    </div>
  );
};

export default ConnectLines;
