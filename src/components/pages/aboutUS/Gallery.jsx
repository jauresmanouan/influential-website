import React from "react";
import { gallery } from "./gallery";

export default function Caroussel() {
  return (
    <div className="h-full mt-20">
      <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight mb-10">
        Notre galerie d'images 🥰
      </h1>
      <div className="grid grid-cols-5 gap-4">
        {gallery.map(({ id, link }) => (
          <div key={id}>
            <img
              src={link}
              alt={`Image ${id}`}
              className="object-cover h-full w-full rounded-3xl active:scale-[3] ease-in-out duration-300 cursor-pointer"
            />
          </div>
        ))}
      </div>
      <p className="font-inter font-medium text-2xl mt-20">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta beatae
        ipsam saepe quas aspernatur, neque at non quod iste quasi obcaecati
        accusamus recusandae dolorum suscipit eligendi sapiente optio, quia
        assumenda.
      </p>
    </div>
  );
}
