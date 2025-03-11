import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLinkCards = ({ label, href, customClass, toggleMenu }) => {
  const location = useLocation();
  const isActive = location.pathname === href;

  return (
    <div className="flex justify-center font-semibold text-[19px] md:text-[16px] lg:text-[17px] items-center">

      <Link
        to={href}
        onClick={toggleMenu}

        className={`hover:text-amber-600 ${isActive ? "text-amber-600 font-bold" : ""} ${customClass}`}
        
      >
        {label}
      </Link>
    </div>
  );
};

export default NavLinkCards;
