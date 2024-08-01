import Menu from "./Menu";
import ButtonShowMenu from "./ButtonShowMenu";
import Logo from "./Logo";

export default function NavBar() {

  return (
    <div className="h-16 lg:h-24 flex justify-between items-center bg-fushia font-inter font-semibold text-sm lg:text-lg px-10 lg:px-40">
      <Logo />
      <Menu />
      <ButtonShowMenu />
    </div>
  );
}
