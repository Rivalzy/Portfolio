import React from "react";

import { projectData } from "../../data";

function Projects() {
  return (
    <section className="grid gap-7 sm:grid-cols-1 lg:grid-cols-3">
      {projectData.map((item) => {
        return (
          <div className="mb-8 group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-accent-hover/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <figure>
              <img
                src={item.image}
                alt=""
                className="group-hover:scale-125 transition-all duration-500"
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <figcaption className="text-white font-semibold tracking-wider text-xl">
                  {item.title}
                </figcaption>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-10 transition-all duration-600 z-50">
                <button className="py-1 px-3 bg-accent hover:bg-amber-500 transition-all duration-200 rounded-lg">
                  <a
                    href="https://github.com/Rivalzy"
                    target="_blank"
                    className="text-white" rel="noreferrer"
                  >
                    Github
                  </a>
                </button>
              </div>
            </figure>
          </div>
        );
      })}
    </section>
  );
}

export default Projects;
