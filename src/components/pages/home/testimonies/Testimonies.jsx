import React from "react";
import TestimoniesSlider from "./TestimoniesSlider";
import ButtonPrevNext from "./ButtonPrevNext";

export default function Testimonies() {
  return (
    <div className="h-[50rem] w-screen bg-blue flex flex-col justify-center content-start">
      <h1 className="font-montserrat text-white font-extrabold text-4xl sm:text-6xl md:text-7xl mb-5 md:mb-14 lg:ml-48">
        Que disent ils ? 🤔
      </h1>
      <ButtonPrevNext />
      <TestimoniesSlider />
    </div>
  );
}
