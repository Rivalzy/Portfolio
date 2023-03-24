import React from "react";

import { social } from "../data";

function Footer() {
  return (
    <footer className="bg-tertiary py-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a
                  className="text-accent text-base hover:text-amber-400"
                  href={href}
                  key={index}
                  target="_blank" rel="noreferrer"
                >
                  {icon}
                </a>
              );
            })}
          </div>

          <div>
            <h1 className="font-Caveat text-3xl lg:text-4xl sm:block opacity-90">
              Muh Rival Dwisatrio
            </h1>
          </div>
          <p>Copyright © 2023 Muhammad Rival. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
