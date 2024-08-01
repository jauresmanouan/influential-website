import React from "react";

export default function Content() {
  return (
    <div className="grid grid-cols-1 grid-rows-4 h-[46rem] xl:grid-cols-2 xl:grid-rows-2 relative -z-20">
      <div className="bg-blue row-span-2 order-4 xl:order-none relative xl:bloc">
        <img
          src="../../../../public/images/Lucette 2.png"
          alt="lucette"
          className="absolute origin-bottom bottom-0 left-0 xl:left-24 scale-0 xl:scale-75"
        />
        <p className="p-7 font-inter font-bold text-white text-3xl md:text-4xl xl:text-6xl xl:hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          corporis, voluptatibus ipsum dolorem est explicabo ratione.
        </p>
      </div>
      <p className="bg-white p-7 md:mt-20 xl:pt-24  text-3xl md:text-4xl xl:text-5xl xl:leading-tight font-inter font-semibold xl:font-bold text-black">
        Lorem ipsum dolor sit amet consectetur adipiscing elidolor sit nullam
        neques.
      </p>
      <p className="bg-turquoise p-7 xl:pt-20 text-3xl md:text-4xl xl:text-5xl xl:leading-tight font-inter font-semibold xl:font-bold">
        Lorem ipsum dolor sit amet iquam sit nullam neques.
      </p>
    </div>
  );
}
