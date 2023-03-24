import React from "react";

import TestimonialSlider from "./TestimonialSlider.js";

function Testimonials() {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What other people say
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante
            in nibh mauris cursus mattis. Sed faucibus turpis in eu mi bibendum
            neque egestas. Leo vel fringilla est ullamcorper eget nulla facilisi
            etiam dignissim. Ac ut consequat semper viverra. Fringilla phasellus
            faucibus scelerisque eleifend donec pretium vulputate.
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
