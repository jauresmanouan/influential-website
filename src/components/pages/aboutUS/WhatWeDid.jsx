import React from "react";
import Gallery from "./Gallery.jsx";
import Stat from "./Stat";
import { data } from "./data";

export default function WhatWeDid() {
  return (
    <section>
      <div className="h-full mx-4 sm:mx-10 md:mx-20 lg:mx-40 my-20">
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight mb-10">
          Nos réalisations 🥳
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3">
          {data.map(({ id, title, data }) => (
            <Stat key={id} title={title} data={data} />
          ))}
        </div>
      </div>
      <Gallery />
    </section>
  );
}
