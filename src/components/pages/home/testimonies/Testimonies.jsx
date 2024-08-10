import TestimoniesSlider from "./TestimoniesSlider";
import ButtonPrevNext from "./ButtonPrevNext";

//@TODO : Faire un défilement automatique
export default function Testimonies() {
  return (
    <div className="h-[50rem] w-screen bg-blue flex flex-col justify-center content-start relative">
      <h1 className="font-montserrat text-white font-extrabold text-4xl sm:text-6xl md:text-7xl mb-5 md:mb-14 lg:ml-48">
        Que disent ils ?
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Smileys/Thinking%20Face.webp"
          alt="Thinking Face"
          className="h-10 lg:h-20 w-10 lg:w-20 align-bottom inline"
        />
      </h1>
      <ButtonPrevNext />
      <TestimoniesSlider />
    </div>
  );
}
