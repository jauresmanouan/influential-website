import React from "react";
import Gallery from "./Gallery.jsx";
import Stat from "./Stat";
import { data } from "./data";

export default function WhatWeDid() {
  return (
    <section className="h-full ml-40 mr-40 mt-20 mb-20">
      <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight mb-10">
        Nos réalisations 🥳
      </h1>
      <div className="flex space-x-14">
        {data.map(({ id, title, data }) => (
          <Stat key={id} title={title} data={data} />
        ))}
      </div>
      <Gallery />
    </section>
  );
}
