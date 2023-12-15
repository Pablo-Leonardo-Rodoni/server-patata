import { NavLink } from "react-router-dom";

export const Anchor = ({
  value,
  className,
  href,
}: {
  value: string;
  className: string;
  href: string;
}) => {
  return (
    <>
      <NavLink
        className={`${className} ({ isActive }) => (isActive ? "#f00" : "#00f")`}
        to={href}
      >
        {value}
      </NavLink>
    </>
  );
};
