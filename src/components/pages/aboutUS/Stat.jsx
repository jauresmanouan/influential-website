import React from "react";

export default function Stat({ data, title }) {
  return (
    <div className="w-72 p-8 rounded-3xl shadow-lg">
      <p className="text-8xl font-inter font-extrabold text-blue">{data}</p>
      <p className="font-inter font-medium">{title}</p>
    </div>
  );
}
