import Button from "../../reusable-ui/Button";

export default function CallToAction() {
  return (
    <div className="h-[375px] bg-fushia flex flex-col space-y-4 justify-center items-center text-center">
      <h1 className="px-40 font-montserrat text-white font-extrabold text-7xl leading-tight">
        Laissez vous tenter par <br />
        l’aventure 🚀
      </h1>
      <Button
        text={"En savoir plus"}
        colorButton={"bg-blue"}
        colorText={"text-white"}
        arrow={false}
      />
    </div>
  );
}
