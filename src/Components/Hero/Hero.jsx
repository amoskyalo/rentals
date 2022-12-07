import React from "react";
import image from "../../Assets/image.png";
import logo from "../../Assets/logo.png";
import { useState } from "react";

const Hero = () => {
  const[sticky, setSticky] = useState("#");
  window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= 100){
      return setSticky('sticky')
    }setSticky('#')
  });

  return (
    <div className="hero flex flex-col bg-navColor relative" id="home">
      {/* nav */}
      <nav className={`px-10 ${sticky === "sticky" ? `fixed w-full top-0 bg-stickyNav` : ""}`}>
        <div className="flex flex-row justify-between items-center mx-auto md:max-w-screen-xl">
          <a href="home" className="flex h-20">
            <img src={logo} alt="" className="min-h-full w-full" />
          </a>
          <div className="flex space-x-10">
            <a href="#home" className="text-white text-xl font-semibold">Home</a>
            <a href="#about" className="text-white text-xl font-semibold">About</a>
            <a href="#contacts" className="text-white text-xl font-semibold">Contact</a>
            <a href="#pricing" className="text-white text-xl font-semibold">Pricing</a>
          </div>
          <div className="flex">
            <a
              href="https://house-management-system.netlify.app/"
              className="border rounded-3xl py-1.5 px-6 text-base text-white font-bold"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      {/* hero */}
      <div className="mt-20 h-full xl:py-0 lg:px-4">
        <div className="flex flex-row h-full mx-auto space-x-10 md:max-w-screen-xl">
          <div className="flex flex-col w-1/2">
            <h2 className="text-white text-sz leading-1 font-bold capitalize">
              We help you manage your rentals with ease...
            </h2>
            <p className="text-white text-xl my-4">
              For many property managers, handling their routine tasks consists
              of a large number of juggling tasks around. Manually performing
              such business operations as tracking rent payments and managing
              maintenance requests is highly time-consuming and often
              overwhelming, and these processes form only a small part of what
              property managers face on a daily basis. Luckily, we bring you an
              easy solution.
            </p>
            <a href="https://house-management-system.netlify.app/" className="bg-white py-2 px-6 border rounded-3xl text-navColor text-xl font-bold w-max mt-5">
              Get started
            </a>
          </div>
          <div className="h-full w-1/2 rounded-t-full flex overflow-hidden">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
