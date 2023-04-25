import React from "react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

function Navbar() {
  return (
    <div className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8 mb-20">
      <RocketLaunchIcon className="h-10 text-[#FB8500]" />
      <div className="text-xl text-[#8ECAE6] tracking-widest">
        Todd&apos;s Data
      </div>
    </div>
  );
}

export default Navbar;
