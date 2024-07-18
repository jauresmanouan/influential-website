import React from "react";

export default function Content() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 h-screen sm:grid-cols-2 sm:grid-rows-2 ">
      <div className="bg-blue row-span-2 order-4 sm:order-none relative">
        <img
          src=""
          alt="lucette"
          className="absolute origin-bottom bottom-0 left-0 sm:left-24 scale-50 sm:scale-75"
        />
      </div>
      <p className="bg-white">
        Lorem ipsum dolor sit amet consectetur adipiscing elidolor sit nullam
        neques.
      </p>
      <p className="bg-turquoise">
        Lorem ipsum dolor sit amet iquam sit nullam neques.
      </p>
    </div>
  );
}

