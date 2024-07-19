import React from "react";
import { HiFire } from "react-icons/hi2";

export default function Content() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 h-[46rem] xl:grid-cols-2 xl:grid-rows-2">
      <div className="bg-blue row-span-2 order-4 xl:order-none relative xl:bloc">
        <img
          src="src/assets/images/Lucette 2.png"
          alt="lucette"
          className="absolute origin-bottom bottom-0 left-0 xl:left-24 scale-0 xl:scale-75"
        />
        <p className="text-3xl md:text-6xl xl:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          corporis, voluptatibus ipsum dolorem est explicabo ratione.
        </p>
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
