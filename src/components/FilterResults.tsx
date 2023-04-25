import React, { useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

function FilterResults() {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const toggleArrowClicked = () => setIsArrowClicked((value) => !value);
  const toggleButtonClicked = () => setIsButtonClicked((value) => !value);

  return (
    <div className="p-10">
      <h2>
        Filter Results
        <button onClick={toggleArrowClicked}>
          {isArrowClicked ? (
            <ArrowDownIcon className="text-white h-5 cursor-pointer" />
          ) : (
            <ArrowRightIcon className="text-white h-5 cursor-pointer" />
          )}
        </button>
      </h2>
      {isArrowClicked ? (
        <>
          <button
            className="bg-[#FB8500] rounded-lg m-2 p-2 font-bold hover:bg-[#eca758] focus:ring-4 ring-[#219EBC] shadow-lg transform active:scale-75 transition-transform"
            onClick={toggleButtonClicked}
          >
            Name
          </button>
          {isButtonClicked ? (
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
              magnam nulla autem iure sapiente ad provident porro, reprehenderit
              vero rem non accusantium blanditiis possimus temporibus quas ut
              dignissimos in explicabo.
            </p>
          ) : (
            ""
          )}
        </>
      ) : null}
    </div>
  );
}

export default FilterResults;
