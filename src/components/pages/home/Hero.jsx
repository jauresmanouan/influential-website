import Button from "../../reusable-ui/Button";
import { easeInOut, motion } from "framer-motion";

//@:TODO : Corriger la petite apostrophe dans l'image de feu
export default function Hero() {
  return (
    <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:pt-20 overflow-x-clip">
      <img
        src="public/images/feu 4.svg"
        alt="feu"
        className="scale-150 md:scale-[1.9] relative top-14 md:top-32 md:right-36 -z-10 md:order-2"
      />
      <div className="flex flex-col justify-center items-center md:items-start p-4 md:pl-10 xl:pl-40">
        <h1 className="text-center md:text-start font-montserrat font-extrabold text-5xl sm:text-7xl lg:text-9xl mb-6 max-md:mt-8 md:z-10 md:w-[70rem] leading-tight">
          Insp
          <motion.img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Animals%20and%20Nature/Fire.webp"
            al="Fire"
            className="h-14 lg:h-28 w- lg:w-28 align-bottom inline mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easeInOut }}
          />
          rez <br /> la nation
        </h1>
        <h2 className="text-center md:text-start font-inter font-medium text-blue text-sm sm:text-lg lg:text-xl mb-8">
          En devenant un agent de changement dans notre communauté 
        </h2>
        <Button
          colorButton={"bg-fushia"}
          text={"En savoir plus"}
          colorText={"text-white"}
          arrow={false}
          className={"hover:scale-110 hover:bg-fushia"}
        />
      </div>
    </div>
  );
}
