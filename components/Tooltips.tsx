import React from "react";

export type Props = {
  className?: string;
  label: string;
  style?: React.CSSProperties;
};

const Tooltips: React.FC<Props> = ({ className, label, style }) => {
  return (
    <div
      className={`${className} inline-block bg-[#6d6d6d] rounded m-0 text-center`}
      style={style}
    >
      <p className="tooltip text-xs text-white m-1 ">{label}</p>
    </div>
  );
};

export default Tooltips;
