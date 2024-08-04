import React from "react";
import Gallery from "./Gallery.jsx";
import Stat from "./Stat";
import { data } from "./data";

export default function WhatWeDid() {
  return (
    <section className="flex justify-center items-center flex-col p-20">
      <h1 className="font-montserrat font-extrabold text-3xl ml-40 sm:text-5xl lg:text-7xl leading-tight">
        Nos réalisations 🥳
      </h1>
      <div className="flex space-x-14 m-20 ">
        {data.map(({ id, title, data }) => (
          <Stat key={id} title={title} data={data} />
        ))}
      </div>
      <Gallery />
    </section>
  );
}
