import React, { useEffect, useState } from "react";
import Switcher from "./switcher";
import { useAppContext } from "@/context/appContext";
import Image from "next/image";

interface propsTypes {
  item: any;
}

const ConnectItem: React.FC<propsTypes> = ({ item }) => {
  // app context
  const { active, setActive } = useAppContext();

  // on switch function
  const handleclick = () => {
    if (active.value === item.businessSize) {
      setActive((prev: any) => ({
        ...prev,
        items: prev.items.map((prevItem: any) => {
          if (prevItem.name === item.name) {
            return { ...prevItem, businessSize: "" };
          } else {
            return prevItem;
          }
        }),
      }));
    } else if (active.value !== item.businessSize) {
      setActive((prev: any) => ({
        ...prev,
        items: prev.items.map((prevItem: any) => {
          if (prevItem.name === item.name) {
            return { ...prevItem, businessSize: prev.value };
          } else {
            return prevItem;
          }
        }),
      }));
    }
  };

  return (
    <div
      className={`h-[21.33vw] desktop:h-[5.55vw] w-full border-[0.26vw] desktop:border-[0.07vw] border-[#e8e6ec] rounded-[3.2vw] desktop:rounded-[0.97vw] px-[4.26vw] desktop:px-[1.11vw] flex items-center justify-between
       `}
      style={{
        outline:
          active.value === item.businessSize
            ? `${window.innerWidth < 768 ? "0.53vw" : "0.14vw"} solid #9D71FD`
            : "none",
        outlineOffset: window.innerWidth < 768 ? "-0.27vw" : "-0.07vw",
      }}
    >
      <div className="flex items-center gap-[2.13vw] desktop:gap-[0.55vw]">
        <div className="w-[12.8vw] desktop:w-[3.33vw] aspect-square rounded-[0.83vw] overflow-hidden relative">
          <Image
            className="object-cover"
            src={item.logo}
            layout="fill"
            alt={item.name}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="font-custom font-semibold text-[4.26vw] desktop:text-[1.11vw] text-[#1a0745] leading-[6.82vw] desktop:leading-[1.77vw]">
            {item.name}
          </h3>
          <p className="font-custom font-normal text-[3.2vw] desktop:text-[0.83vw] leading-[5.12vw] desktop:leading-[1.33vw]">
            {item.description}
          </p>
        </div>
      </div>
      <Switcher item={item} handleclick={handleclick} />
    </div>
  );
};

export default ConnectItem;
