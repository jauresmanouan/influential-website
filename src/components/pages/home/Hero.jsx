import Button from "../../reusable-ui/Button";

//@:TODO : Corriger la petite apostrophe dans l'imagede feu
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:pt-20 overflow-x-clip">
      <img
        src="public/images/feu 4.svg"
        alt="feu"
        className="scale-150 md:scale-[1.9] relative top-14 md:top-32 md:right-36 -z-10 md:order-2"
      />
      <div className="flex flex-col justify-center items-center md:items-start p-4 md:pl-10 xl:pl-40">
        <h1 className="text-center md:text-start font-montserrat font-extrabold text-3xl sm:text-6xl lg:text-9xl mb-6 max-md:mt-8 md:z-10 md:w-[70rem] leading-tight">
          Insp
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Fire.webp"
            alt="Fire"
            className="h-14 lg:h-28 w- lg:w-28 align-bottom inline"
          />
          rez la nation <br />
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
