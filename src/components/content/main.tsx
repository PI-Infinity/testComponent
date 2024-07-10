import CenterSection from "./centerSection";
import LeftSide from "./leftSide";
import RightSide from "./rightSide";

const Content = () => {
  return (
    <div className="w-[86.4vw] desktop:w-full desktop:w-full h-full desktop:h-[20.75vw] flex flex-col desktop:flex-row items-center desktop:items-end">
      <div className="hidden desktop:flex w-full flex-1">
        <LeftSide />
      </div>
      <CenterSection />
      <div className="w-full flex-1 desktop:hidden mt-[5.33vw] desktop:mt-[1.4vw]">
        <LeftSide />
      </div>
      <div className="w-full flex-1 mt-[2.67vw] desktop:mt-[0.7vw] desktop:mt-0">
        <RightSide />
      </div>
    </div>
  );
};

export default Content;
