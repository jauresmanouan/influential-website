import React from "react";

export default function Content() {
  return (
    <div className="flex bg-green-500 h-[46rem] w-full">
      <div className="bg-blue h-full w-full">Image</div>
      <div className="flex flex-col">
        <p className="bg-white h-[387px] w-[46rem] font-inter font-bold text-4xl leading-tight pr-60 pl-16 pb-10 flex justify-end items-end">
          Lorem ipsum dolor sit amet consectetur adipiscing elidolor sit nullam
          neques.
        </p>
        <p className="bg-turquoise h-[387px] w-full font-inter font-bold text-4xl leading-tight pr-60 pl-16 pt-10">
          Lorem ipsum dolor sit amet iquam sit nullam neques.
        </p>
      </div>
    </div>
  );
}
