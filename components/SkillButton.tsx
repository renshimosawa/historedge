import React from "react";
export type Props = {
  className?: string;
  onSkillClick?: () => void;
  label: string;
  style?: React.CSSProperties;
  disabled?: boolean;
};

const SkillButton: React.FC<Props> = ({
  className,
  onSkillClick,
  label,
  style,
  disabled,
}) => (
  <button
    className={`${className} w-[140px] h-[40px] bg-[#535353] text-white border-none rounded cursor-pointer duration-300 hover:duration-300 hover:bg-[#747474]`}
    onClick={onSkillClick}
    style={style}
    disabled={disabled}
  >
    <span>{label}</span>
  </button>
);

export default SkillButton;
