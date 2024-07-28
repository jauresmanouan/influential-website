import { useContext } from "react";
import Menu from "./Menu";
import ButtonShowMenu from "./ButtonShowMenu";
import { Context } from "../../../../context/Context";
import Logo from "./Logo";

export default function NavBar() {
  const { isOpen } = useContext(Context);

  return (
    <div className="h-16 lg:h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-sm lg:text-lg px-10 lg:px-40">
      <Logo />
      <Menu />
      <ButtonShowMenu />
    </div>
  );
}
