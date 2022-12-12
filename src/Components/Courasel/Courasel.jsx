import React, { useEffect, useState } from "react";

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
    if (newIndex <= 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };
  // console.log(currentIndex)

  const[paused, setPaused]= useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      if(!paused){
        setCurrentIndex(currentIndex + 1);
      }
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="md:px-10">
      <div
        className={`inner whitespace-nowrap md:space-x-2 duration-1000 translate-x-[-${
          currentIndex * 100
        }%] md:translate-x-[-${(currentIndex / 2) * 100}%]`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {React.Children.map(children, (child) => {
          return React.cloneElement(child);
        })}
      </div>
    </div>
  );
};

export default Courasel;
