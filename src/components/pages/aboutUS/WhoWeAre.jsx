import React from "react";

export default function WhoWeAre() {
  return (
    <div className="h-full mx-4 sm:mx-10 md:mx-20 lg:mx-40 my-20">
      <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight mb-10">
        Qui sommes <span className="text-fushia">nous</span> ?
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/People/Woman%20Shrugging.webp"
          alt="Woman Shrugging"
          className="h-10 lg:h-20 w-10 lg:w-20 align-bottom inline"
        />
      </h1>
      <p className="font-inter font-s text-base sm:text-lg md:text-xl lg:text-2xl text-justify leading-normal rounded-3xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        quam eveniet voluptatum eos molestias. Dolores expedita soluta iste enim
        labore alias placeat eaque. Illum laudantium ipsa illo iusto deleniti
        officiis. <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        quam eveniet voluptatum eos molestias. Dolores expedita soluta iste enim
        labore alias placeat eaque. Illum laudantium ipsa illo iusto deleniti
        officiis.
      </p>
    </div>
  );
}
