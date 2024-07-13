import { HiOutlineArrowRight } from "react-icons/hi2";
import Button from "../../../reusable-ui/Button";
import { Link } from "react-router-dom";

export default function Menu({ className }) {
  return (
    <div className={className}>
      <Link to="/" className="underline-hover">
        <li>Accueil</li>
      </Link>
      <Link to={"/nos-activités"} className="underline-hover">
        <li>Nos activités</li>
      </Link>
      <Link to={"/nous-connaître"} className="underline-hover">
        <li>Nous connaître</li>
      </Link>
      <Link to={"/nous-rejoindre"}>
        <Button
          colorButton={"bg-white"}
          text={"Nous rejoindre"}
          colorText={"text-fushia"}
          iconStyle={"text-fushia lg:w-5 h-5"}
          arrow={true}
          className={"hover:border-2 hover:border-turquoise hover:bg-white"}
        />
      </Link>
    </div>
  );
}
