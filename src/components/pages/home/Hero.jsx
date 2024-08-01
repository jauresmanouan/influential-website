import Button from "../../reusable-ui/Button";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:pt-20 overflow-x-clip">
      <img
        src="public/images/feu 3.svg"
        alt="feu"
        className="scale-150 md:scale-[2] relative left-10 -z-10 md:order-2"
      />
      <div className="flex flex-col justify-center items-center md:items-start p-4 md:pl-10 xl:pl-40">
        <h1 className="text-center md:text-start font-montserrat font-extrabold text-3xl sm:text-6xl lg:text-7xl mb-6 max-md:mt-8 md:z-10 md:w-[70rem] leading-tight">
          Insp🔥rez la nation, <br />
          construisez <br /> l'avenir ✨
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
