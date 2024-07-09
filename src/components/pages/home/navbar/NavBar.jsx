import styled from "styled-components";
import { GoArrowRight } from "react-icons/go";

export default function NavBar() {
  return (
    <NavBarStyled className="h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-lg	">
      <div className="logo ml-40 text-white">Logo</div>
      <div className="links mr-40 list-none flex items-center  gap-8 text-white">
        <li>Accueil</li>
        <li>Nos activités</li>
        <li>Nous connaître</li>
        <li className="rejoindre flex justify-center items-center gap-1 w-48 h-14 bg-white rounded-full">
          <button className="text-fushia">Nous rejoindre</button>
          <GoArrowRight className="text-fushia w-5 h-5" />
        </li>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div``;
