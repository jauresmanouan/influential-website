import { useContext, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Context } from "../../../../context/Context";

export default function ShowMenu() {
  const { isOpen, setIsOpen } = useContext(Context);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleMenu} className=" md:hidden">
      {isOpen ? (
        <HiOutlineXMark className="text-white w-5 h-5" />
      ) : (
        <HiOutlineMenuAlt2 className="text-white w-5 h-5 " />
      )}
    </div>
  );
}
