import Button from "../../../reusable-ui/Button";
import LinkTo from "./LinkTo";

export default function Menu() {
  return (
    <div className="hidden md:flex items-center space-x-8 text-white list-none">
      <LinkTo to={"/"} variant={"primary"}>
        Accueil
      </LinkTo>

      <LinkTo to={"/nos-activités"} variant={"primary"}>
        Nos activités
      </LinkTo>

      <LinkTo to={"/nous-connaître"} variant={"primary"}>
        Nous connaître
      </LinkTo>

      <LinkTo to={"/nous-rejoindre"}>
        <Button
          colorButton={"bg-white"}
          text={"Nous rejoindre"}
          colorText={"text-fushia"}
          iconStyle={"text-fushia lg:w-5 h-5"}
          arrow={true}
          className={"hover:border-2 hover:border-turquoise hover:bg-white"}
        />
      </LinkTo>
    </div>
  );
}
