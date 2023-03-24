import React, { useState, useEffect } from "react";
import { SiAurelia } from "react-icons/si";

// import components
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import Nav from "./Nav";

function Header () {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <h1 className="font-Caveat text-3xl lg:text-4xl hidden sm:block opacity-90">Muh Rival Dwisatrio</h1>
        <SiAurelia className="w-20 h-10 sm:hidden"/>
        {/* Navbar */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* Nav Mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
