import React from "react";

const Pricing = () => {
  return (
    <div
      className="footer flex flex-col mx-auto my-10 gap-10 md:max-w-screen-xl lg:px-10 xl:px-0"
      id="pricing"
    >
      <h2 className="text-szmd text-headerColor text-center font-bold">
        Plans and <span className="text-navColor">Pricing</span>
      </h2>
      <div className="flex flex-row gap-5">
        <div className="flex flex-col w-1/3">
          <h2 className="text-szmd text-navColor font-bold leading-none">
            Let's get started, pick a plan
          </h2>
          <p className="mt-5 text-2xl lg:text-base xl:text-2xl">
            Get the best plan for you and lets get rolling.
          </p>
        </div>
        <div className="flex flex-col mx-auto p-2 w-2/3 gap-10 md:flex-row lg:gap-5 xl:gap-5">
          <div className="flex flex-col items-center p-4 rounded border w-1/3 h-80 max-h-80 relative lg:p-6 xl:p-4">
            <div className="flex flex-col">
              <h2 className="font-bold text-headerText text-xl">Basic</h2>
              <p className="text-base my-2">
                <span className="text-xl lg:text-2xl xl:text-3xl">$30</span>
                /month
              </p>
              <ul className="list-disc">
                <li className="text-lg lg:text-sm xl:text-lg">
                  Maximum of 50 houses
                </li>
                <li className="text-lg lg:text-sm xl:text-lg">
                  Maximum of two plots
                </li>
                <li className="text-lg lg:text-sm xl:text-lg">
                  Rent due date reminder
                </li>
              </ul>
            </div>
            <div className="flex absolute bottom-4 w-max">
              <button className="bg-navColor rounded w-full text-white py-1 px-10 xl:py-2">
                Choose plan
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 rounded border w-1/3 h-80 max-h-80 relative lg:p-6 xl:p-4">
            <div className="flex flex-col">
              <h2 className="font-bold text-headerText text-xl">Pro</h2>
              <p className="text-base my-2">
                <span className="text-xl lg:text-2xl xl:text-3xl">$70</span>
                /month
              </p>
              <ul className="list-disc">
                <li className="text-lg lg:text-sm xl:text-lg">
                  Less 75 houses
                </li>
                <li className="text-lg lg:text-sm xl:text-lg">
                  Maximum of five plots
                </li>
                <li className="text-lg lg:text-sm xl:text-lg">
                  Rent due date reminder
                </li>
              </ul>
            </div>
            <div className="flex absolute bottom-4 w-max">
            <button className="bg-navColor rounded w-full text-white py-1 px-10 xl:py-2">
                Choose plan
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center p-4 rounded border w-1/3 h-80 max-h-80 relative lg:p-6 xl:p-4">
            <div className="flex flex-col">
              <h2 className="font-bold text-headerText text-xl">VIP</h2>
              <p className="text-base my-2">
                <span className="text-xl lg:text-2xl xl:text-3xl">$100</span>
                /month
              </p>
              <ul className="list-disc">
                <li className="text-lg lg:text-sm xl:text-lg">
                  Unlimited houses
                </li>
                <li className="text-lg lg:text-sm xl:text-lg">
                  Unlimited plots plots
                </li>
                <li className="text-lg lg:text-sm xl:text-lg">
                  Rent due date reminder
                </li>
                <li className="text-lg lg:text-sm xl:text-lg">
                  Rentals advertisement
                </li>
              </ul>
            </div>
            <div className="flex absolute bottom-4 w-max">
            <button className="bg-navColor rounded w-full text-white py-1 px-10 xl:py-2">
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
