import React from "react";
import { datas } from "./AboutData";
import display1 from "../../Assets/display1.jpeg";
import display2 from "../../Assets/display2.jpeg";

const About = () => {
  return (
    <div className="about mt-10 px-0 lg:px-10 xl:px-0" id="about">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-szmd text-headerColor font-bold text-center">
          How We Make <span className="text-spanColor">Difference</span>
        </h2>
        <div className="flex flex-row gap-5 mt-10 mb-32">
          <div className="relative w-1/2 h-96">
            <img src={display1} alt="" className="relative h-full w-3/4 rounded object-contain"/>
            <img src={display2} alt="" className="absolute -bottom-12 -right-10 h-3/4 rounded w-3/4 object-contain" />
          </div>
          <div className="flex flex-col w-1/2">
            <p className="w-full mx-auto text-center leading-7 lg:text-sm xl:text-lg">
              As a rental owner or rentals manager, you look forward to a day
              you can control all of your rentals without having to go through
              the stress or the extra miles involved.With a management system,
              you do not have to be present at all times to manage your
              rentals.
            </p>
            <a
              href="https://house-management-system.netlify.app/"
              className="mt-10 ml-10 bg-navColor border w-max rounded-3xl py-2 px-6 text-base text-white font-bold hover:bg-white hover:text-navColor hover:border duration-500"
            >
              Get started
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-10 w-[90%] mx-auto">
          <h2 className="capitalize text-szmd font-bold text-center text-headerColor">
            Why  our product?
          </h2>
          <div className="products flex flex-row flex-wrap mt-10 border-b border-t py-4">
            {datas.map((data, i) => (
              <div
                className="flex flex-row items-center py-5 rounded hover:bg-hoverColor text-white ease-in-out duration-1000 w-1/2"
                key={i}
              >
                <div className="flex justify-center items center w-1/3 rounded-full overflow-hidded">
                  <img
                    src={data.img}
                    alt=""
                    className="h-24 w-24 m-auto rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col w-3/4">
                  <h2 className="text-headerColor text-xl font-semibold">
                    {data.title}.
                  </h2>
                  <p className="text-headerColor leading-7 lg:text-sm xl:text-lg">
                    {data.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
