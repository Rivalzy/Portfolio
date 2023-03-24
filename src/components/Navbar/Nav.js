import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        <li>
          <Link to='/' className="hover:text-accent transition-all duration-300">home</Link>
        </li>
        <li>
          <Link to='/portfolio' className="hover:text-accent transition-all duration-300">portfolio</Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="hover:text-accent transition-all duration-300"
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
