import React from "react";
import Nav from "../Hero/Nav";
import { CgArrowLongRight } from "react-icons/cg";
import image from "../../Assets/Blobs/blob.png";
import { data } from "./Data";
import { useState } from "react";

const Pricing = () => {
  const [active, setActive] = useState("#");
  return (
    <section>
      {/* nav */}
      <div className="bg-stickyNav">
        <Nav />
      </div>
      <div className="flex flex-col max-w-screen-xl mx-auto my-5 text-center md:my-20">
        <h2 className="text-4xl px-2 font-semibold opacity-[0.9] md:px-0 md:text-6xl">
          Make more online, <span className="text-navColor">for less</span>
        </h2>
        <div className="flex h-48 w-48 mx-auto mt-5 overflow-hidden rounded-full md:mt-10">
          <img src={image} alt="" className="h-full w-full object-cover" />
        </div>
        <h2 className="text-2xl text-navColor font-semibold">
          Explore current top deals
        </h2>
        <p className="text-[#686a71] px-2 md:px-0">
          Check out our best deals across our product range, and get what's best
          for you
        </p>
        <div className="bg-[#dbdcdc] flex flex-row w-max mx-auto mt-5 rounded-lg">
          <p
            className={`font-semibold opacity-[0.8] cursor-pointer py-2 px-5 rounded-l-lg ${
              active === "#" ? `bg-[#686a71]` : ""
            }`}
            onClick={() => setActive("#")}
          >
            All
          </p>
          <p
            className={`font-semibold opacity-[0.8] cursor-pointer py-2 px-5 ${
              active === "1" ? `bg-[#686a71]` : ""
            }`}
            onClick={() => setActive("1")}
          >
            Individual
          </p>
          <p
            className={`font-semibold opacity-[0.8] cursor-pointer py-2 px-5 rounded-r-lg ${
              active === "2" ? `bg-[#686a71]` : ""
            }`}
            onClick={() => setActive("2")}
          >
            Sacco
          </p>
        </div>
        <div className="grid grid-cols-1 space-y-10 mx-auto mt-10 md:space-y-0 md:w-[75%] md:flex md:flex-row md:space-x-5">
          {data.map((offer, i) => (
            <div className="flex flex-col w-[80%] md:w-1/4 mx-auto" key={i}>
              <div className="bg-white flex flex-col relative  w-full h-[13rem] max-h-[14rem] rounded-lg px-4 pt-5">
                <h2 className="absolute left-2 -top-3 bg-navColor text-white text-sm px-2 py-1 rounded">
                  $
                  {Math.floor(
                    ((offer.original - offer.price) / offer.original) * 100
                  )}% Off
                </h2>
                <h2 className="text-xl font-semibold">{offer.name}</h2>
                <p className="mt-5 text-4xl font-bold">
                  ${offer.price}{" "}
                  <span className="text-base align-top">/month</span>
                </p>
                <p className="line-through mt-2">${offer.original}</p>
                <button className="bg-navColor absolute bottom-2 left-[5%] w-[90%] py-2 rounded text-white font-semibold">
                  Get Started
                </button>
              </div>
              <p className="text-start mt-2 cursor-pointer">
                {offer.description}{" "}
                <span className="flex flex-row items-end block text-navColor">
                  Go to {offer.name}{" "}
                  <CgArrowLongRight className="text-xl ml-2" />
                </span>
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col mt-20">
          <h2 className="text-3xl font-semibold opacity-[0.9] md:text-5xl">
            Get Started With Simple Steps
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
