import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Button({
  text,
  colorButton,
  colorText,
  iconStyle,
  arrow = true,
  className,
}) {
  return (
    <div
      className={`${colorButton} ${className} btn font-inter font-semibold text-sm lg:text-lg flex justify-center items-center gap-1 w-40 h-10 lg:w-48 lg:h-14 rounded-full`}
    >
      <button className={`${colorText}`}>{text}</button>
      {arrow && <HiOutlineArrowRight className={iconStyle} />}
    </div>
  );
}
