import Button from "../../reusable-ui/Button";

export default function CallToAction({ text, icon, button }) {
  return (
    <div className="h-80 sm:h-96 bg-fushia flex flex-col space-y-4 justify-center items-center text-center">
      <h1 className="px-8 sm:px-20 lg:px-40 font-montserrat text-white font-extrabold text-2xl sm:text-5xl lg:text-7xl leading-tight">
        {text}
        { icon && <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Telegram-Animated-Emojis/main/Travel%20and%20Places/Rocket.webp"
          alt="Rocket"
          className="h-10 lg:h-20 w-10 lg:w-20 align-bottom inline"
        />}
      </h1>
      {button && (
        <Button
          text={"En savoir plus"}
          colorButton={"bg-blue"}
          colorText={"text-white"}
          arrow={true}
          className={"border-none bg-blue hover:bg-turquoise"}
        />
      )}
    </div>
  );
}
