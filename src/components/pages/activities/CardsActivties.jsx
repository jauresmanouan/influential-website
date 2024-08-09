import Cards from "../../reusable-ui/Cards";
import { activities } from "./activities";

export default function CardsActivties() {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <h1 className="font-montserrat font-extrabold text-center text-3xl sm:text-5xl lg:text-7xl leading-tight">
        Nous menons 5 <br className="hidden md:block" />
        différentes <span className="text-fushia">activités</span>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Star%20Struck.webp"
          alt="Star Struck"
           className="h-10 lg:h-20 w-10 lg:w-20 align-bottom inline"
        />
      </h1>
      <Cards array={activities} />
    </div>
  );
}
