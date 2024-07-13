import { useContext, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiOutlineXMark } from "react-icons/hi2";
import { Context } from "../../../../context/Context";
import DrawerMenu from "./DrawerMenu";

export default function ShowMenu() {
  const { isOpen, setIsOpen } = useContext(Context);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleMenu} className="md:hidden">
      {/* <HiOutlineMenuAlt2 className="text-white w-5 h-5 " /> */}
      <DrawerMenu/>
      {/* <HiOutlineXMark className="text-white w-5 h-5" /> */}
    </div>
  );
}
