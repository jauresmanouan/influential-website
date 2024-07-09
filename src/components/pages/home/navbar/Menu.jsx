import { HiOutlineArrowRight } from "react-icons/hi2";
import Button from "../../../reusable-ui/Button";

export default function Menu({ className }) {
  return (
    <div className={className}>
      <li>Accueil</li>
      <li>Nos activités</li>
      <li>Nous connaître</li>
      <Button
        text={"Nous rejoindre"}
        textStyle={"text-fushia"}
        iconStyle="text-fushia lg:w-5 h-5"
        arrow={true}
      />
    </div>
  );
}
