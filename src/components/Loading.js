import React from "react";

export default function Loading() {
  return (
    <div className="flex">
      <div className="loading-ripple w-full  flex items-center mr-8 ">
        <div className="md:mt-0 mt-[220px] md:ml-[80px] -ml-4"></div>
        <div className="md:mt-0 mt-[220px] md:ml-[80px] -ml-4"></div>
      </div>
    </div>
  );
}
