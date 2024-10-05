import React from "react";

export type Props = {
  className?: string;
  onClick?: () => void;
};

const AppbarGray: React.FC<Props> = ({ onClick, className }) => (
  <header className="h-[55px] flex items-center py-4">
    <button onClick={onClick} className="" aria-label="Logo">
      <img
        className="w-[190px] ml-[1vw]"
        src="/logo_gray.svg"
        width={250}
        height={50}
        alt="Historedge"
      />
    </button>
  </header>
);

export default AppbarGray;
