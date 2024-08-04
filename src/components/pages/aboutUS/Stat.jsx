import React from "react";

export default function Stat({ data, title }) {
  return (
    <div className="max-w-72 p-8 rounded-3xl shadow-lg m-4">
      <p className="text-4xl sm:text-6xl lg:text-8xl font-inter font-extrabold text-blue">
        {data}
      </p>
      <p className="font-inter font-medium text-sm lg:text-lg mt-4">{title}</p>
    </div>
  );
}
