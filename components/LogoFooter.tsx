import Image from "next/image";

const currentYear = new Date();

const LogoFooter: React.FC = () => {
  return (
    <footer className="bg-[#3c3c3c] w-full flex justify-center items-center text-white p-1 fixed bottom-0 left-0">
      <Image src="/logo_white.svg" alt="historedge" width="100" height="16" />
      <p className="text-xs">@copyright 2020-{currentYear.getFullYear()}</p>
    </footer>
  );
};

export default LogoFooter;
