import React from "react";
import image from "../../Assets/image.png";
import logo from "../../Assets/logo2.png";
import { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai'

const Hero = () => {
  const [sticky, setSticky] = useState("#");
  const [active, setActive] = useState(false)
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 100) {
      return setSticky("sticky");
    }
    setSticky("#");
  });

  return (
    <section className="hero flex flex-col bg-navColor relative" id="home">
      {/* nav */}
      <nav
        className={`py-0 lg:px-10 ${
          sticky === "sticky" ? `fixed w-full top-0 bg-stickyNav` : ""
        }`}
      >
        <div className="relative flex flex-row justify-between items-center mx-auto max-w-full md:max-w-screen-xl">
          <a href="home" className="flex flex-row items-center h-16 md:h-20 lg:h-20 xl:h-20 z-50">
            <img src={logo} alt="" className="h-full" />
            <p className="text-white text-base font-semibold md:text-xl md:text-xl">OurName</p>
          </a>
          <div className={`flex flex-col items-center absolute ${active ? `top-[4rem]` : `top-[-400%]`} duration-500 w-full pb-4 bg-navColor md:flex-row md:pb-0 md:bg-none md:space-x-5 md:space-x-5 md:relative md:w-max md:top-0`}>
            <a href="#home" className="text-white text-base font-normal md:text-xl md:font-semibold">
              Home
            </a>
            <a href="#about" className="text-white text-base font-normal md:text-xl md:font-semibold">
              About
            </a>
            <a href="#contacts" className="text-white text-base font-normal md:text-xl md:font-semibold">
              Contact
            </a>
            <a href="#pricing" className="text-white text-base font-normal md:text-xl md:font-semibold">
              Pricing
            </a>
            <a href="#pricing" className="text-white text-base font-normal md:text-xl md:font-semibold">
              Testimonials
            </a>
            <a
              href="https://house-management-system.netlify.app/"
              className="flex bg-white w-max rounded-3xl py-1 px-6 text-base text-navColor font-bold hover:bg-navColor hover:text-white hover:border duration-700 md:hidden"
            >
              Get started
            </a>
          </div>
          <div className="hidden lg:flex">
            <a
              href="https://house-management-system.netlify.app/"
              className="bg-white rounded-3xl py-2 px-6 text-base text-navColor font-bold hover:bg-navColor hover:text-white hover:border duration-700"
            >
              Get started
            </a>
          </div>
          <div className="flex mr-1 lg:hidden z-50" onClick={() =>setActive(!active)}>
            <AiOutlineMenu className="text-2xl text-white"/>
          </div>
        </div>
      </nav>

      {/* hero */}
      <div className="mt-10 h-full pb-10 xl:px-0 lg:px-10 md:mt-20">
        <div className="flex flex-col h-full mx-auto md:flex-row md:space-x-10 md:max-w-screen-xl">
          <div className="flex flex-col px-2 md:px-0 md:w-1/2">
            <h2 className="text-white text-4xl font-bold capitalize md:text-sz md:leading-1">
              We help you manage your rentals with ease...
            </h2>
            <p className="text-white text-base my-4 lg:text-base xl:text-xl">
              For many property managers, handling their routine tasks consists
              of a large number of juggling tasks around. Manually performing
              such business operations as tracking rent payments and managing
              maintenance requests is highly time-consuming and often
              overwhelming, and these processes form only a small part of what
              property managers face on a daily basis. Luckily, we bring you an
              easy solution.
            </p>
            <a
              href="https://house-management-system.netlify.app/"
              className="bg-white py-2 px-6 border rounded-3xl text-navColor text-xl font-bold w-max hover:bg-navColor hover:text-white duration-700 md:mt-5 "
            >
              Get started
            </a>
          </div>
          <div className="h-full mt-10 rounded-t-full flex overflow-hidden md:w-1/2 md:mt-0">
            <img src={image} alt="" className="h-[20rem] w-full object-cover lg:h-[40vw] xl:h-[40rem] md:h-[40rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
