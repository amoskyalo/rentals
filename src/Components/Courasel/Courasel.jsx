import React, { useState } from "react";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";

export const CouraselItem = ({ children }) => {
  return (
    <div className="py-2 w-full inline-flex border rounded md:w-1/2">
      {children}
    </div>
  );
};

const Courasel = ({ children }) => {
  const [currentIndex, setIndex] = useState(0);

  const setCurrentIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  // console.log(currentIndex)
  return (
    <div className="md:px-10">
      <div className="flex flex-row justify-end space-x-5 mb-2">
        <div className="bg-navColor p-1 rounded cursor-pointer" onClick={() =>setCurrentIndex(currentIndex - 1)}>
          <MdOutlineArrowBackIos className="text-white" />
        </div>
        <div className="bg-navColor p-1 rounded cursor-pointer" onClick={()=>setCurrentIndex(currentIndex + 1)}>
          <MdArrowForwardIos className="text-white" />
        </div>
      </div>
      <div
        className={`inner whitespace-nowrap md:space-x-2 duration-1000 translate-x-[-${currentIndex * 100}%] md:translate-x-[-${(currentIndex / 2) * 100}%]`}
      >
        {children}
      </div>
    </div>
  );
};

export default Courasel;
