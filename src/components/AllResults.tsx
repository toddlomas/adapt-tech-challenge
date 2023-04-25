import React, { useEffect, useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import UsersList from "./UsersList";

function AllResults() {
  const [isArrowClicked, setIsArrowClicked] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [users, setUsers] = useState<any[]>([]);

  const toggleArrowClicked = () => setIsArrowClicked((value) => !value);
  const toggleButtonClicked = () => setIsButtonClicked((value) => !value);

  return (
    <div className="p-10 max-w-screen">
      <h2>
        All Results{" "}
        <button onClick={toggleArrowClicked}>
          {isArrowClicked ? (
            <ArrowDownIcon className="text-white h-5 cursor-pointer" />
          ) : (
            <ArrowRightIcon className="text-white h-5 cursor-pointer" />
          )}
        </button>
      </h2>

      {isArrowClicked ? <UsersList /> : null}
    </div>
  );
}

export default AllResults;
