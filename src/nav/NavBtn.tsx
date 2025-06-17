import { type ReactNode } from "react";
import { NavLink } from "react-router-dom";

type NavBtnProps = {
  link: string;
  children: ReactNode;
};

function NavBtn({ link, children }: NavBtnProps) {
  return (
    <NavLink
      to={link}
      className="h-8 w-20 content-center rounded-md bg-[#fffff5]/90 text-center text-sm text-[#333] md:h-10 md:w-24 md:text-base lg:h-12 lg:w-28 lg:rounded-lg lg:text-lg xl:h-16 xl:w-36 xl:text-xl"
    >
      {children}
    </NavLink>
  );
}

export default NavBtn;
