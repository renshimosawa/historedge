import TopBack from "./TopBack";
import React from "react";

export type Props = {
  className?: string;
  title: string;
};

const Top: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={`${className} w-screen h-[60vh] m:h-[50vh]`}>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center z-[10] m:m-auto m:top-[30vh]">
        <h1 className="text-3xl text-white whitespace-nowrap font-josefin font-bold">
          {title}
        </h1>
      </div>
      <TopBack className="relative w-full" />
    </div>
  );
};

export default Top;
