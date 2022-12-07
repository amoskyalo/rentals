import React from "react";
import { datas } from "./AboutData";

const About = () => {
  return (
    <div className="about pb-10 mt-10 px-0 lg:px-4 xl:px-0" id="about">
      <div className="mx-auto max-w-screen-xl">
        <h2 className="text-sz text-headerColor font-bold text-center">
          How We Make <span className="text-spanColor">Difference</span>
        </h2>
        <p className="w-1/2 mx-auto text-center leading-7 lg:text-sm xl:text-lg">
          As a rental owner or rentals manager, you look forward to a day you
          can control all of your rentals without having to go through the
          stress or the extra miles involved.With a management system, you do
          not have to be present at all times to manage your property.
        </p>
        <div className="flex flex-col justify-center mt-10">
          <h2 className="capitalize text-szsm font-bold text-center text-headerColor">
            Why use our product?
          </h2>
          <div className="products grid grid-cols-4 gap-4 mt-10">
            {datas.map((data, i) => (
              <div
                className="flex flex-col items-center py-5 rounded hover:bg-hoverColor text-white ease-in-out duration-1000"
                key={i}
              >
                <div className="flex justify-center items center h-28 w-28 bg-imgColor rounded-full overflow-hidded">
                  <img
                    src={data.img}
                    alt=""
                    className="h-24 w-24 m-auto rounded-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-center mt-2">
                  <h2 className="text-headerColor text-xl font-semibold">
                    {data.title}.
                  </h2>
                  <p className="text-headerColor leading-7 lg:text-sm xl:text-lg">{data.text}</p>
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
