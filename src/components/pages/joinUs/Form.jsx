import React from "react";
import { infoForm } from "./infoForm";
import Button from "../../reusable-ui/Button";

export default function Form() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:h-[58rem]">
      <div className="lg:block">
        <img
          src="public/images/galeries/RZR_0055.jpg"
          alt="Form Image"
          className="object-cover h-72 lg:h-[58rem] w-full"
        />
      </div>
      <div className="flex flex-col max-lg:justify-center max-lg:items-center p-4 sm:p-10">
        <h1 className="font-montserrat font-extrabold text-3xl sm:text-5xl md:text-4xl xl:text-6xl leading-tight mb-10">
          Rejoignez-nous 😊
        </h1>
        <form className="w-full max-w-lg space-y-5">
          {infoForm.map(({ id, type, placeholder }) => (
            <div key={id}>
              <label
                htmlFor={type}
                className="block text-gray-700 font-inter font-semibold mb-2"
              >
                {placeholder}
              </label>
              <input
                type={type}
                placeholder={placeholder}
                className="bg-slate-100 rounded-full w-full h-12 sm:h-16 font-inter font-normal px-4 sm:px-8 outline-2 outline-blue"
              />
            </div>
          ))}
          <div>
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="description"
            >
              Parlez nous de vous
            </label>
            <textarea
              id="description"
              placeholder="Parlez nous de vous"
              className="bg-slate-100 rounded-3xl w-full h-32 sm:h-48 font-inter font-normal px-4 sm:px-8 outline-2 outline-blue resize-none"
            />
          </div>
          <div className="flex justify-center">
            <Button
              text={"Transmettre"}
              className={
                "text-white bg-fushia gap-1 w-40 h-10 lg:w-full btn font-inter font-semibold text-sm lg:text-lg flex justify-start items-e lg:h-14"
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}
