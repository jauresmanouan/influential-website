import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Logo from "./Logo";
import { HiOutlineXMark } from "react-icons/hi2";
import LinkTo from "./LinkTo";

export default function DrawerMenu() {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="my-drawer-4"
          className="drawer-button cursor-pointer active:bg-blue"
        >
          <HiOutlineMenuAlt2 className="text-white w-5 h-5 " />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white text-base-content min-h-full w-screen p-4">
          <div className="flex justify-between items-center px-2 mb-10">
            <Logo />
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            >
              <div className="btn rounded-full bg-turquoise text-white border-none">
                <HiOutlineXMark />
              </div>
            </label>
          </div>
          <div className="flex flex-col space-y-4 font-inter font-semibold text-base">
            <LinkTo to={"/"} variant={"secondary"}>
              Accueil
            </LinkTo>

            <LinkTo to={"/nos-activités"} variant={"secondary"}>
              Nos activités
            </LinkTo>

            <LinkTo to={"/nous-connaître"} variant={"secondary"}>
              Nous connaître
            </LinkTo>

            <LinkTo to={"/nous-rejoindre"} variant={"secondary"}>
              Nous rejoindre
            </LinkTo>
          </div>
        </div>
      </div>
    </div>
  );
}
