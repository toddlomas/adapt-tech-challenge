import React, { useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { TypeAnimation } from "react-type-animation";

function UpdateExisting() {
  const [isArrowClicked, setIsArrowClicked] = useState(false);

  const toggleArrowClicked = () => setIsArrowClicked((value) => !value);

  const toggleClicked = () => setIsArrowClicked((value) => !value);
  return (
    <div className="p-10">
      <h2>
        Update an existing result{" "}
        <button onClick={toggleClicked}>
          {isArrowClicked ? (
            <ArrowDownIcon className="text-white h-5 cursor-pointer" />
          ) : (
            <ArrowRightIcon className="text-white h-5 cursor-pointer" />
          )}
        </button>
      </h2>
      {isArrowClicked ? (
        <TypeAnimation
          className="text-[#ffb703] my-10"
          sequence={["Work in progress...", 2000, "", 1000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1.5em", display: "inline-block" }}
        />
      ) : null}
    </div>
  );
}

export default UpdateExisting;
