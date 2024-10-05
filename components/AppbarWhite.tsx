export type Props = {
  className?: string;
  onClick?: () => void;
};

const AppbarWhite: React.FC<Props> = ({ onClick, className }) => (
  <header
    className={`${className} w-full h-[80px] flex items-center py-4 z-[2]`}
  >
    <button onClick={onClick} className="" aria-label="Logo">
      <img
        className="w-[250px] ml-[1vw]"
        src="/logo_white.svg"
        width={250}
        height={50}
        alt="Historedge"
      />
    </button>
  </header>
);

export default AppbarWhite;
