import Image from "next/image";
import React from "react";

const CenterSection = () => {
  return (
    <div className="flex flex-col items-center justify-end w-[86.13vw] desktop:w-[26.4vw] mt-[11.47vw] desktop:mt-0 desktop:h-full">
      <div className="w-full flex flex-col items-center h-[64vw] desktop:h-[18.6vw] rounded-[6.4vw] desktop:rounded-[1.66vw] border-[0.53vw] desktop:border-[0.14vw] border-[#9d71fd] bg-[#f2effe]">
        <div className="relative flex flex-col items-center bottom-[11.47vw] desktop:bottom-[2.15vw]">
          <div className="w-[22.93vw] desktop:w-[5.97vw] aspect-square rounded-[2.66vw] desktop:rounded-[0.83vw] overflow-hidden relative">
            <Image
              className="object-cover"
              src="/woman.png"
              layout="fill"
              alt="img"
            />
          </div>

          <div className="w-[80vw] desktop:w-[20.83vw] h-[40.26vw] desktop:h-[10.48vw] flex flex-col items-center mt-[5.33vw] desktop:mt-[0.97vw]">
            <h1 className="font-custom text-center text-[4.8vw] desktop:text-[1.25vw] text-[#1A0745] leading-[6.72vw] desktop:leading-[1.75vw] font-[700]">
              Laurien Robson
            </h1>
            <p className="font-custom font-normal text-center text-[3.73vw] desktop:text-[0.97vw] text-[#5f517d] leading-[5.97vw] desktop:leading-[1.75vw] mt-[1.6vw] desktop:mt-[0.41vw]">
              HR-Director
            </p>
            <p className="font-custom font-normal text-center text-[4.26vw] desktop:text-[1.11vw] text-[#1a0745] leading-[6.82vw] desktop:leading-[1.77vw] mt-[5.6vw] desktop:mt-[1.38vw]">
              “I want to lower PTO liability and keep my employess happy. I want
              to lower PTO liability.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterSection;
