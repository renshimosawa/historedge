const currentYear = new Date();

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex p-2 justify-center">
      <p className="">
        Historedge.com by Ren Shimosawa @copyright 2020-
        {currentYear.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
