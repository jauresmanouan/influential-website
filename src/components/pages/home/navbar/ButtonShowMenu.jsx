import { useContext } from "react";
import { Context } from "../../../../context/Context";
import DrawerMenu from "./DrawerMenu";

export default function ShowMenu() {
  const { isOpen, setIsOpen } = useContext(Context);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={handleMenu} className="md:hidden">
      <DrawerMenu/>
    </div>
  );
}
