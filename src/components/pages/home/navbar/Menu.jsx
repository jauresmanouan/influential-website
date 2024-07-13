import { HiOutlineArrowRight } from "react-icons/hi2";
import Button from "../../../reusable-ui/Button";
import { Link } from "react-router-dom";
import LinkToPage from "./LinkToPage";

export default function Menu() {
  return (
    <div className="hidden md:flex items-center space-x-8 text-white list-none">
      <LinkToPage to={"/"} variant={"primary"}>
        Accueil
      </LinkToPage>

      <LinkToPage to={"/nos-activités"} variant={"primary"}>
        Nos activités
      </LinkToPage>

      <LinkToPage to={"/nous-connaître"} variant={"primary"}>
        Nous connaître
      </LinkToPage>

      <LinkToPage to={"/nous-rejoindre"}>
        <Button
          colorButton={"bg-white"}
          text={"Nous rejoindre"}
          colorText={"text-fushia"}
          iconStyle={"text-fushia lg:w-5 h-5"}
          arrow={true}
          className={"hover:border-2 hover:border-turquoise hover:bg-white"}
        />
      </LinkToPage>
      {/* <Link to="/" className="underline-hover">
        <li>Accueil</li>
      </Link>

      <Link to={"/nos-activités"} className="underline-hover">
        <li>Nos activités</li>
      </Link>
      
      <Link to={"/nous-connaître"} className="underline-hover">
        <li>Nous connaître</li>
      </Link>
      
      <Link to={"/nous-rejoindre"}>
        <li>
          <Button
            colorButton={"bg-white"}
            text={"Nous rejoindre"}
            colorText={"text-fushia"}
            iconStyle={"text-fushia lg:w-5 h-5"}
            arrow={true}
            className={"hover:border-2 hover:border-turquoise hover:bg-white"}
          />
        </li>
      </Link> */}
    </div>
  );
}
