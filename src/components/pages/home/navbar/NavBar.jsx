import { useContext } from "react";
import Menu from "./Menu";
import ShowMenu from "./ShowMenu";
import { Context } from "../../../../context/Context";

export default function NavBar() {
  const { isOpen } = useContext(Context);

  return (
    <div>
      <div className="h-16 lg:h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-sm lg:text-lg px-10 lg:px-40">
        <div className="logo text-white">Logo</div>
        <Menu
          className={
            "hidden md:flex items-center space-x-8 text-white list-none"
          }
        />
        <ShowMenu />
      </div>
      {isOpen && (
        <Menu
          className={
            "fixed right-0 h-1/2 w-1/2 flex items-center p-10 flex-col space-y-8 list-none bg-fushia text-white font-inter font-semibold text-sm"
          }
        />
      )}
    </div>
  );
}
