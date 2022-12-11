import React from "react";
import logo from "../../Assets/logo2.png";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from "react-router-dom";

import qwarqo from '../../Assets/qwarqo.png';

import discover from '../../Assets/Payments/discover.jpeg';
import master from '../../Assets/Payments/master.jpg';
import mpesa from '../../Assets/Payments/mpesa.jpeg';
import paypal from '../../Assets/Payments/paypal.png';
import visa from '../../Assets/Payments/visa.jpg';

const Footer = () => {
  return (
    <footer className="border py-4 lg:px-10 xl:px-0">
      <div className="flex flex-col max-w-screen-xl mx-auto">
        <div className="flex flex-row space-x-20">
        <div className="flex flex-col w-[40%] space-y-5">
          <div className="flex flex-col  space-y-2 border-b pb-2">
            <Link to="/home" className="flex flex-row items-center">
              <img src={logo} alt="our logo" className="h-24 w-24" />
              <p className="text-navColor text-4xl font-semibold">Ourname</p>
            </Link>
            <p className="text-xl text-navColor">
              We make rental management simple, secure and comfortable for you
            </p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-navColor text-xl font-semibold">
              Join Our Newsletter & Marketing Communication
            </h2>
            <p className="text-navColor text-lg">
              We'll send you news and offers.
            </p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="you@yours.com"
              className="w-3/4 px-2 py-3 rounded-l border outline-none"
            />
            <button className="bg-navColor text-white text-lg py-3 w-1/4 rounded-r">
              Join
            </button>
          </div>
          <div className="flex flex-row items-center gap-5">
            <Link to="link-for-media">
              <BsTwitter className="text-navColor text-2xl"/>
            </Link>
            <Link to="link-for-media">
              <BsLinkedin className="text-navColor text-2xl"/>
            </Link>
            <Link to="link-for-media">
              <AiFillInstagram className="text-navColor text-3xl"/>
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-between w-[60%]">
          <div className="flex flex-col">
            <h2 className="text-navColor text-xl font-semibold">Home</h2>
            <p className="text-navColor text-lg">Home</p>
            <p className="text-navColor text-lg">About Us</p>
            <p className="text-navColor text-lg">Pricing</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-navColor text-xl font-semibold">Contact Us</h2>
            <p className="text-navColor text-lg">Contact Us</p>
            <p className="text-navColor text-lg">Testimonials</p>
            <p className="text-navColor text-lg">Payments</p>
          </div>
          <div className="flex flex-col">
            <h2 className="text-navColor text-xl font-semibold">Panel</h2>
            <p className="text-navColor text-base">Contact Us</p>
            <p className="text-navColor text-base">Property listing</p>
            <p className="text-navColor text-base">Partnership</p>
            <a
              href="https://house-management-system.netlify.app/"
              className="mt-10 bg-navColor border w-max rounded-3xl py-2 px-6 text-base text-white font-bold hover:bg-white hover:text-navColor hover:border duration-500"
            >
              Get started
            </a>
          </div>
        </div>
        </div>
        <div className="mt-10 flex flex-row justify-between">
          <Link to="https://qwarqo.com/" className="flex flex-col items-start">
            <img src={qwarqo} alt="listing company" className="h-8 object-contain"/>
            <p className="text-navColor italic">List your property with Qwarqo</p>
          </Link>
          <div className="flex flex-row items-center space-x-2">
            <img src={mpesa} alt="" className="h-7 w-15 object-contain"/>
            <img src={master} alt="" className="h-7 w-15 object-contain"/>
            <img src={discover} alt="" className="h-7 w-15 object-contain"/>
            <img src={visa} alt="" className="h-7 w-15 object-contain"/>
            <img src={paypal} alt="" className="h-7 w-15 object-contain"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
