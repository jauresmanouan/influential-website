import styled from "styled-components";
import { HiOutlineArrowRight, HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarStyled>
      <div className="h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-sm lg:text-lg px-10 lg:px-40">
        <div className="logo text-white">Logo</div>
        <div className="hidden md:flex items-center space-x-8 text-white list-none ">
          <li>Accueil</li>
          <li>Nos activités</li>
          <li>Nous connaître</li>
          <li className="rejoindre flex justify-center items-center gap-1 w-40 h-10 lg:w-48 lg:h-14 bg-white rounded-full">
            <button className="text-fushia ">Nous rejoindre</button>
            <HiOutlineArrowRight className="text-fushia lg:w-5 h-5" />
          </li>
        </div>
        <div onClick={handleMenu} className=" md:hidden">
          {isOpen ? (
            <HiOutlineXMark className="text-white w-5 h-5" />
          ) : (
            <HiOutlineMenuAlt2 className="text-white w-5 h-5 " />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="fixed right-0 h-1/2 w-1/2 flex items-center p-10 flex-col space-y-8 list-none bg-fushia text-white font-inter font-semibold text-sm">
          <li>Accueil</li>
          <li>Nos activités</li>
          <li>Nous connaître</li>
          <li className="rejoindre flex justify-center items-center gap-1 w-36 h-10 bg-white rounded-full">
            <button className="text-fushia ">Nous rejoindre</button>
            <HiOutlineArrowRight className="text-fushia lg:w-5 h-5" />
          </li>
        </div>
      )}
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div``;
