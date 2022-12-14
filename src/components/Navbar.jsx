import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={ logo } alt="hoobank" className="w-[124px] h-[32px]" />

        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-teal-300 text-[16px] ${index === navLinks.length - 1 ? 'mr-o' : 'mr-10'}`}>
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu } alt="menu" />
        </div>
      </nav>
  );
};

export default Navbar;
