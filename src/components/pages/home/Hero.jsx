import Button from "../../reusable-ui/Button";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 grid-rows-1 items-center justify-center h-[calc(100vh-6rem)] px-10 lg:px-40">
      <div className="space-y-5">
        <h1 className=" text-6xl font-montserrat font-extrabold leading-tight">
          Inspirez la nation, <br />
          construisez l’avenir
        </h1>
        <h2 className="text-blue font-inter font-bold">
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
      <div className="border-2 border-green-600 ">b</div>
    </div>
  );
}
