import React from "react";
import { Link } from "react-router-dom";

function TitleMobile() {
  return (
    <div>
      <ul className="items-center text-center">
        <li className="mb-5">
          <Link to="/"  className="text-xl cursor-pointer capitalize hover:text-amber-400 hover:border-b-2 transition-all duration-150 tracking-wider">home</Link>
        </li>
        <li className="mb-5">
          <Link to="/portfolio"  className="text-xl cursor-pointer capitalize hover:text-amber-400 hover:border-b-2 transition-all duration-150 tracking-wider">portfolio</Link>
        </li>
        <li>
          <Link to="/contact"  className="text-xl cursor-pointer capitalize hover:text-amber-400 hover:border-b-2 transition-all duration-150 tracking-wider">contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default TitleMobile;
