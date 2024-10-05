import Image from "next/image";

export type Props = {
  className?: string;
  imgUrl: string;
  alt: string;
  label?: string;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
};

const ImgItem: React.FC<Props> = ({
  className,
  imgUrl,
  alt,
  label,
  style,
  labelStyle,
}) => {
  return (
    <div
      className={`${className} w-[350px] h-[180px] inline-block relative bg-[#fcfdff] border-none drop-shadow-lg duration-300 hover:opacity-70 hover:duration-300`}
      style={style}
    >
      <div className="w-full h-full overflow-hidden m:flex m:justify-center m:items-center">
        <Image
          src={imgUrl}
          className="w-full"
          width={350}
          height={180}
          alt={alt}
        />
      </div>
      <p
        className="inline-block absolute bottom-[10px] left-[10px] m-0 px-1 bg-white backdrop-blur-sm"
        style={labelStyle}
      >
        {label}
      </p>
    </div>
  );
};

export default ImgItem;
