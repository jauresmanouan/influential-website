import { useContext } from "react";
import Menu from "./Menu";
import ButtonShowMenu from "./ButtonShowMenu";
import { Context } from "../../../../context/Context";
import Logo from "./Logo";

export default function NavBar() {
  const { isOpen } = useContext(Context);

  return (
    <div>
      <div className="h-16 lg:h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-sm lg:text-lg px-10 lg:px-40">
        <Logo />
        <Menu />
        <ButtonShowMenu />
      </div>
      {/* {isOpen && (
        <Menu
          className={
            "fixed right-0 h-1/2 w-1/2 flex items-center p-10 flex-col space-y-8 list-none bg-fushia text-white font-inter font-semibold text-sm"
          }
        />
      )} */}
    </div>
  );
}
