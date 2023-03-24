import React from "react";
import Image from "../../assets/img/Man2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Rival
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-50"/>
              <p className="mb-8">I'm a skilled Full Stack software developer with experience in TypeScript and JavaScript, and expertise in frameworks like React, Node.js, MongoDB and Express.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!.</p>
            </div>
            <Link to="/contact" className="btn btn-md bg-accent hover:bg-accent-hover transition-all duration-200">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
