import React, { useState } from "react";
import { ArrowRightIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import AllResults from "./AllResults";
import FilterResults from "./FilterResults";
import CreateNew from "./CreateNew";
import UpdateExisting from "./UpdateExisting";
import DeleteResult from "./DeleteResult";

function Homepage() {
  return (
    <div className="mx-[300px]">
      <AllResults />
      {/* <FilterResults /> */}
      <CreateNew />
      <UpdateExisting />
      <DeleteResult />
    </div>
  );
}

export default Homepage;
