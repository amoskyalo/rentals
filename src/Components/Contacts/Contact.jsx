import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="contact border bg-navColor mx-auto py-20 px-10 mt-10 mb-10 rounded-lg xl:max-w-screen-xl lg:max-w-[75vw]" id="contacts">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col w-2/3">
          <h2 className="text-szmd text-white font-bold">
            Get in touch with us!
          </h2>
          <p className="text-white text-2xl lg:text-lg xl:text-2xl">
            Have any question? You can in touch with and we will respond to you
            as soon as possible
          </p>
        </div>
        <Link className="border py-3 px-10 text-semibold text-white rounded-3xl flex items-center gap-2 hover:bg-white hover:text-navColor ease-in-out duration-500">
          Contact us <HiOutlineArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
