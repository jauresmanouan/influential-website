import Button from "../../reusable-ui/Button";
import { HiFire } from "react-icons/hi2";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:pt-20 overflow-x-clip">
      {/* <img
        src="https://i.pinimg.com/564x/cb/4b/ac/cb4bacdfe4334b112753180a5a7bd0be.jpg"
        alt="logo"
        className="w-full scale-150 mt-14 md:order-2 md:z-0"
      /> */}
      <HiFire className="text-blue md:scale-150 w-full h-full mt-14 md:order-2 md:z-0" />
      <div className="flex flex-col justify-center items-center md:items-start p-4 md:pl-40">
        <h1 className="text-center md:text-start font-montserrat font-extrabold text-5xl sm:text-6xl lg:text-8xl mb-6 md:z-10">
          Inspirez la nation, <br />
          construisez l'avenir
        </h1>
        <h2 className="text-center md:text-start font-inter font-medium text-blue text-sm sm:text-lg lg:text-xl mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Commodi minima dolores natus sequi voluptates cupiditate unde
        </h2>
        <Button
          colorButton={"bg-fushia"}
          text={"En savoir plus"}
          colorText={"text-white"}
          arrow={false}
        />
      </div>
    </div>
  );
}
