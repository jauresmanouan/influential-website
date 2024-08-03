import React from "react";

export default function WhoWeAre() {
  return (
    <div className="h-[30rem] flex flex-col justify-center items-center gap-10 ml-40 mr-40">
      <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight">
        Qui sommes <span className="text-fushia">nous</span> ? 🤷🏾‍♂️
      </h1>
      <p className="font-inter font-semibold text-2xl text-justify leading-normal">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        quam eveniet voluptatum eos molestias. Dolores expedita soluta iste enim
        labore alias placeat eaque. Illum laudantium ipsa illo iusto deleniti
        officiis. <br/>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        quam eveniet voluptatum eos molestias. Dolores expedita soluta iste enim
        labore alias placeat eaque. Illum laudantium ipsa illo iusto deleniti
        officiis.
      </p>
    </div>
  );
}
