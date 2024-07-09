import { HiOutlineArrowRight } from "react-icons/hi2";

export default function Button({ text, textStyle, iconStyle, arrow = true }) {
  return (
    <div className="flex justify-center items-center gap-1 w-40 h-10 lg:w-48 lg:h-14 bg-white rounded-full">
      <button className={textStyle}>{text}</button>
      {arrow && <HiOutlineArrowRight className={iconStyle} />}
    </div>
  );
}
