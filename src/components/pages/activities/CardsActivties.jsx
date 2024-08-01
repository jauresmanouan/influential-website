import Cards from "../home/News/Cards";
import { activities } from "./activities";

export default function CardsActivties() {
  return (
    <div className="flex flex-col justify-center items-center py-12 px-4 sm:py-24 sm:px-6 lg:py-32 lg:px-8">
      <h1 className="font-montserrat font-extrabold text-center text-3xl sm:text-5xl lg:text-7xl leading-tight">
        Nous menons 5 <br className="hidden md:block" />
        différentes <span className="text-fushia">activités</span> 🤩
      </h1>
      <Cards array={activities} />
    </div>
  );
}
