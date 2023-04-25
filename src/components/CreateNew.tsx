import React, { useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import NewForm from "./NewForm";

function CreateNew() {
  const [isClicked, setIsClicked] = useState(false);
  const toggleClicked = () => setIsClicked((value) => !value);

  return (
    <div className="p-10">
      {" "}
      <h2>
        Create new result
        <button onClick={toggleClicked}>
          {isClicked ? (
            <ArrowDownIcon className="text-white h-5 cursor-pointer" />
          ) : (
            <ArrowRightIcon className="text-white h-5 cursor-pointer" />
          )}
        </button>
      </h2>
      {isClicked ? (
        <div className="text-[#FFB703] mt-10">
          <NewForm />
        </div>
      ) : null}
    </div>
  );
}

export default CreateNew;
