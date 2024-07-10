import React from "react";

const Header = () => {
  return (
    <div className="inline-block flex flex-col items-center w-full desktop:w-[54.1vw] desktop:h-[11.45vw]">
      <div className="pb-[6.4vw] desktop:pb-[1.66vw] w-[86.13vw] desktop:w-full">
        <h1 className="font-bold text-[9.6vw] desktop:text-[4.44vw] leading-[11.52vw] desktop:leading-[5.77vw] inline-block text-center p-0 text-[#1A0745 desktop:max-h-[5.75vw] w-full">
          Easy Turn-Key Integration
        </h1>
      </div>
      <div className="desktop:max-w-[54vw] w-[86.40vw] desktop:w-full">
        <p className="font-custom text-[#5f517d] desktop:max-h-[4vw] p-0 m-0 font-sf-pro text-[4.26vw] desktop:text-[1.25vw] text-center leading-[6.82vw] desktop:leading-[2vw] w-full">
          Increase job satisfaction, improve engagement, decrease burnout and
          lower payroll liability by reimagining what employees can do with
          their PTO.
        </p>
      </div>
    </div>
  );
};

export default Header;
