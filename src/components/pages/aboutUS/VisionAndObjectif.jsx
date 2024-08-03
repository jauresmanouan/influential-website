import React from "react";

export default function VisionAndObjectif() {
  return (
    <div className="text-center">
      <h1 className="font-montserrat font-extrabold text-3xl ml-40 mb-10 sm:text-5xl lg:text-7xl leading-tight">
        Vision & <span className="text-fushia">Objectif</span> 🏹
      </h1>
      <div className="h-full grid grid-cols-2 grid-rows-2 pl-40 pr-40">
        <img src="public/images/photos/brenda-miriam.jpg" alt="" className="" />
        <div className="bg-blue">
          <h1 className="font-inter font-extrabold text-3xl text-justify leading-normal mt-10 ml-16 mb-5">
            Notre vision
          </h1>
          <p className="font-inter font-semibold text-base text-justify leading-normal ml-16 mr-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            pariatur odit sapiente cumque, neque, laudantium architecto <br />
            repellendus aliquid voluptate minus laborum, dolore quas iure. Unde
            accusamus est rerum blanditiis esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam pariatur odit sapiente cumque,
            neque,
          </p>
        </div>
        <div className="bg-turquoise">
          <h1 className="font-inter font-extrabold text-3xl text-justify leading-normal mt-10 ml-16 mb-5">
            Notre Objectif
          </h1>
          <p className="font-inter font-semibold text-base text-justify leading-normal ml-16 mr-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            pariatur odit sapiente cumque, neque, laudantium architecto <br />
            <br />
            repellendus aliquid voluptate minus laborum, dolore quas iure. Unde
            accusamus est rerum blanditiis esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam pariatur odit sapiente cumque,
            neque,
          </p>
        </div>
        <img src="public/images/photos/lucette-micro.jpg" alt="" />
      </div>
    </div>
  );
}
