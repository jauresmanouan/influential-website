import React from "react";

export default function VisionAndObjectif() {
  return (
    <div className="h-full mx-4 sm:mx-10 md:mx-20 lg:mx-40 my-20">
      <h1 className="font-montserrat font-extrabold text-3xl mb-10 sm:text-5xl lg:text-7xl leading-tight">
        Vision & <span className="text-fushia">Objectif</span> 🏹
      </h1>
      <div className="h-full grid grid-cols-1 md:grid-cols-2">
        <img
          src="public/images/photos/brenda-miriam.jpg"
          alt="brenda"
          className="w-full h-full object-cover"
        />
        <div className="bg-blue p-4 md:p-8">
          <h1 className="font-inter font-extrabold text-2xl sm:text-3xl text-justify leading-normal mb-5">
            Notre vision
          </h1>
          <p className="font-inter font-semibold text-base sm:text-lg text-justify leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            pariatur odit sapiente cumque, neque, laudantium architecto
            repellendus aliquid voluptate minus laborum, dolore quas iure. Unde
            accusamus est rerum blanditiis esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam pariatur odit sapiente cumque,
            neque,
          </p>
        </div>
        <div className="bg-turquoise p-4 md:p-8">
          <h1 className="font-inter font-extrabold text-2xl sm:text-3xl text-justify leading-normal mb-5">
            Notre Objectif
          </h1>
          <p className="font-inter font-semibold text-base sm:text-lg text-justify leading-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            pariatur odit sapiente cumque, neque, laudantium architecto
            repellendus aliquid voluptate minus laborum, dolore quas iure. Unde
            accusamus est rerum blanditiis esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam pariatur odit sapiente cumque,
            neque,
          </p>
        </div>
        <img
          src="public/images/photos/lucette-micro.jpg"
          alt="lucette"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
