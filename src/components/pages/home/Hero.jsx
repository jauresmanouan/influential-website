import Button from "../../reusable-ui/Button";

export default function Hero() {
  return (
    <div className="border-2 border-blue">
      <div className="flex flex-col justify-center items-center">
        <img
          src="https://i.pinimg.com/564x/cb/4b/ac/cb4bacdfe4334b112753180a5a7bd0be.jpg"
          alt="logo"
          className="bg-fushia w-screen border-2 border-black mt-14"
        />
        <h1 className="text-center font-montserrat font-extrabold text-5xl border-2 border-green-500 mb-6 ml-8 mr-8">
          Inspirez la nation, <br />
          construisez l'avenir
        </h1>
        <h2 className="text-center font-inter font-medium text-blue text-sm border-2 border-red-500 mb-8 ml-8 mr-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          <br />
          hic. Commodi minima dolores natus sequi voluptates cupiditate unde
        </h2>
        <Button
          colorButton={"bg-fushia"}
          text={"En savoir plus"}
          colorText={"text-white"}
          arrow={false}
          className={"border-2 border-black"}
        />
      </div>
    </div>
  );
}
