import Image from "next/image";

export type Props = {
  className?: string;
};

const TopBack: React.FC<Props> = ({ className }) => (
  <div className={`${className} w-screen h-[60vh] m:h-[50vh]`}>
    <Image
      src="/backImgsmall-pc3.png"
      className="aspect-[851 / 531] m:hidden"
      alt=""
      fill
      style={{ objectFit: "cover" }}
    />
    <Image
      src="/backImgsmall-sp1.png"
      className="hidden m:block m:h-[50vh]"
      alt=""
      fill
    />
  </div>
);

export default TopBack;
