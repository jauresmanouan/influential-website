import { Link } from "react-router-dom";

export default function LinkTo({ to, children, variant }) {
  const style = {
    primary: "underline-hover",
    secondary:
      "active:bg-fushia active:text-white btn hover:bg-white bg-white border-none shadow-none",
  };

  return (
    <Link to={to} className={style[variant]}>
      <li>{children}</li>
    </Link>
  );
}
