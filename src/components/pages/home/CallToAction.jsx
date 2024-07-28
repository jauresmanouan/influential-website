import Button from "../../reusable-ui/Button";

export default function CallToAction() {
  return (
    <div className="h-80 sm:h-96 bg-fushia flex flex-col space-y-4 justify-center items-center text-center">
      <h1 className="px-8 sm:px-20 lg:px-40 font-montserrat text-white font-extrabold text-2xl sm:text-5xl lg:text-7xl leading-tight">
        Laissez vous tenter par <br />
        l’aventure 🚀
      </h1>
      <Button
        text={"En savoir plus"}
        colorButton={"bg-blue"}
        colorText={"text-white"}
        arrow={false}
        className={"border-none bg-blue hover:bg-turquoise"}
      />
    </div>
  );
}
