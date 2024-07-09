import styled from "styled-components";
import { HiOutlineArrowRight, HiOutlineXMark } from "react-icons/hi2";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavBarStyled>
      <div className="h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-lg">
        <div className="logo text-white">Logo</div>
        <div className="hidden md:flex items-center space-x-8 text-white list-none ">
          <li>Accueil</li>
          <li>Nos activités</li>
          <li>Nous connaître</li>
          <li className="rejoindre flex justify-center items-center gap-1 w-48 h-14 bg-white rounded-full">
            <button className="text-fushia ">Nous rejoindre</button>
            <HiOutlineArrowRight className="text-fushia w-5 h-5" />
          </li>
        </div>
        <div className=" md:hidden">
          {isOpen ? (
            <HiOutlineXMark
              onClick={handleOpenMenu}
              className="text-white w-5 h-5 "
            />
          ) : (
            <HiOutlineMenuAlt2
              onClick={handleOpenMenu}
              className="text-white w-5 h-5"
            />
          )}
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div``;
