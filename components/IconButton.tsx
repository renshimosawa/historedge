import Icon from "./IconCompo";

export type Props = {
  className?: string;
  style?: React.CSSProperties;
  type: IconType;
  onClick?: () => void;
};

export type IconType =
  | "facebook"
  | "doubleUp"
  | "github"
  | "gmail"
  | "twitter"
  | "zenn";

const IconButton: React.FC<Props> = ({ className, style, type, onClick }) => (
  <div className={`${className} bg-none border-none relative`} style={style}>
    {/* <button className={styles.button} onClick={onClick}> */}
    <Icon type={type} />
    {/* </button> */}
  </div>
);

export default IconButton;
