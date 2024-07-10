import Button from "../../reusable-ui/Button";

export default function Hero() {
  return (
    <div className="md:grid grid-cols-2 grid-rows-1 items-center justify-center h-[calc(100vh-6rem)] px-10 lg:px-40">
      <div className="border-red-700 space-y-5 flex flex-col justify-center items-center md:items-start text-center md:text-left m-8 md:m-0">
        <h1 className="text-3xl md:text-6xl font-montserrat font-extrabold leading-tight">
          Inspirez la nation, <br />
          construisez l’avenir
        </h1>
        <h2 className="text-blue text-sm md:text-lg font-inter font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          hic. Commodi minima dolores natus sequi voluptates cupiditate unde
        </h2>
        <Button
          colorButton={"bg-fushia"}
          text={"En savoir plus"}
          colorText={"text-white"}
          arrow={false}
        />
      </div>
      <img src="" alt="logo" className="w-full h-96 bg-red-600" />
    </div>
  );
}
