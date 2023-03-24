import React from "react";

import Projects from "./Projects";

function Portofolio() {
  return (
    <section id="portfolio" className="section bg-primary min-h-[500px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-portfolio relative before:absolute before:opacity-70 before:-top-[2rem] before:-left-52 before:hidden before:lg:block mb-10">
            Portfolio
          </h2>
          <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus mattis. Sed faucibus turpis in eu mi bibendum neque egestas. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Ac ut consequat semper viverra. Fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate.</p>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portofolio;
