import React from "react";

import { social } from "../../data";

function Socials() {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => {
        return (
        <li
            className="flex justify-center items-center text-accent"
            key={index}
          >
            <a className="text-base hover:text-amber-400 transition-all duration-150" href={item.href} target='_blank'>
              {item.icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
