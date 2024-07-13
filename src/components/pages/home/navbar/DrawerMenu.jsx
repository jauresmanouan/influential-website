import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { HiOutlineXMark } from "react-icons/hi2";

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
              <div className="btn rounded-full bg-turquoise text-white border-none"><HiOutlineXMark/></div>
            </label>
          </div>
          <div className="flex flex-col space-y-4 font-inter font-semibold text-base">
            <Link
              to="/"
              className="active:bg-fushia active:text-white btn hover:bg-white bg-white border-none shadow-none"
            >
              <li>Accueil</li>
            </Link>
            <Link
              to={"/nos-activités"}
              className="active:bg-fushia active:text-white btn hover:bg-white bg-white border-none shadow-none"
            >
              <li>Nos activités</li>
            </Link>
            <Link
              to={"/nous-connaître"}
              className="active:bg-fushia active:text-white btn hover:bg-white bg-white border-none shadow-none"
            >
              <li>Nous connaître</li>
            </Link>
            <Link
              to={"/nous-rejoindre"}
              className="active:bg-fushia active:text-white btn hover:bg-white bg-white border-none shadow-none"
            >
              <li>Nous connaître</li>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
